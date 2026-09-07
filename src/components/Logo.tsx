import logoMarkup from '../assets/logo.svg?raw'

type LogoProps = {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <span
      className={`logo-mark ${className ?? ''}`}
      // Raw SVG has fill/stroke set to currentColor, so it inherits color + drop-shadow from CSS.
      dangerouslySetInnerHTML={{ __html: logoMarkup }}
    />
  )
}
