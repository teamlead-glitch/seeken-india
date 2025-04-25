

export const useCheckoutAddressValidator = () => {
  const { addToast } = useToast()

  const validateAddress = (
    validate_obj: Record<string, any>,
    contactInfoRef: any,
    type: 'ship' | 'bill' = 'ship'
  ): boolean => {
    const requiredFields = [
      'first_name',
      'last_name',
      'address',
      'city',
      'location',
      'pincode',
      'phone'
    ]

    const refs =
      type === 'ship'
        ? contactInfoRef.value?.ship_fieldRefs
        : contactInfoRef.value?.bill_fieldRefs

    for (const field of requiredFields) {
      const value = validate_obj?.[field]

      if (!value || String(value).trim() === '') {
        const formattedField = field.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        addToast(`${formattedField} is required`, 'error')

        // Focus on the invalid input field
        refs?.[field]?.value?.focus()
        return false
      }
    }

    return true
  }

  return {
    validateAddress
  }
}
