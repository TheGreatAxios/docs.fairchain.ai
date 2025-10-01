import React from 'react'

type CopyButtonProps = { text: string }

function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      // noop
    }
  }

  return (
    <button
      onClick={doCopy}
      style={{
        border: '1px solid var(--vocs-border-strong)',
        background: 'var(--vocs-bg-muted)',
        borderRadius: 6,
        padding: '6px 10px',
        fontSize: 12,
        cursor: 'pointer',
      }}
      aria-label={`Copy ${text}`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export type CopyRowProps = {
  label: string
  value: string
}

export function CopyRow({ label, value }: CopyRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        border: '1px solid var(--vocs-border)',
        borderRadius: 8,
        padding: 10,
        background: 'var(--vocs-bg-subtle)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 12, color: 'var(--vocs-fg-muted)' }}>{label}</span>
        <code style={{ fontSize: 13, marginTop: 2 }}>{value}</code>
      </div>
      <CopyButton text={value} />
    </div>
  )
}

export default CopyRow
