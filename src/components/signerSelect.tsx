'use client'

import * as React from 'react'
import { MenuItem, Select } from '@mui/material'
import { SelectProps } from '@mui/material/Select/Select'
import { useAccountsState } from '@/src/define/useLocalStorageState'

export default function SignerSelect(props: SelectProps<any>) {
  const [accounts] = useAccountsState()

  if (!accounts) return <></>

  return (
    <Select {...props} label='Select Signer'>
      <MenuItem value={''}>None</MenuItem>)
      {accounts.map(({ address }, key) => (
        <MenuItem key={key} value={address}>
          {address}
        </MenuItem>
      ))}
    </Select>
  )
}
