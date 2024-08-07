'use server'

import { createClient } from '@/lib/supabase/server'
import { addDay } from '@formkit/tempo'

export const getReservations = async (targetDate: Date) => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('User not found.')
  }

  const { data, error } = await supabase
    .from('reservations')
    .select(
      `
      *,
      menus:menu_id (
        name,
        minutes
      ),
      staffs:staff_id (
        name
      ),
      customers:customer_id (
        name,
        phone_number,
        email
      )
    `,
    )
    .eq('store_id', user.user_metadata.store_id)
    .gte('start_datetime', targetDate.toISOString())
    .lt('start_datetime', addDay(targetDate, 1).toISOString())
    .order('start_datetime', { ascending: true })
  if (error) {
    throw error
  }

  return data
}

export const getMenus = async () => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('User not found.')
  }

  const { data, error } = await supabase
    .from('menus')
    .select('*')
    .eq('staff_id', user.id)
  if (error) {
    throw error
  }

  return data
}

export const getStore = async () => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('User not found.')
  }

  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .eq('id', user.user_metadata.store_id)
    .single()
  if (error) {
    throw error
  }

  return data
}

export const getBusinessHours = async () => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('User not found.')
  }

  const { data, error } = await supabase
    .from('business_hours')
    .select('*')
    .eq('store_id', user.user_metadata.store_id)
  if (error) {
    throw error
  }

  return data
}
