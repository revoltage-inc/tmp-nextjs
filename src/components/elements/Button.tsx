import styles from '@css/elements/Button.module.css'

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const modeStyle = primary ? styles.storybookButtonPrimary : styles.storybookButtonSecondary

  let sizeStyle = styles.storybookButtonSmall
  if (size === 'medium') {
    sizeStyle = styles.storybookButtonMedium
  } else {
    sizeStyle = styles.storybookButtonLarge
  }

  return (
    <button
      type="button"
      className={[styles.storybookButton, modeStyle, sizeStyle].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
