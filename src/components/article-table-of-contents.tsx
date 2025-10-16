import type { LocalizedTocItem } from '@/lib/utils/i18n-data'

type TocProps = {
  items: LocalizedTocItem[]
  title: string
}

function TocList({ items }: { items: LocalizedTocItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {item.title}
          </a>
          {item.children && item.children.length > 0 && (
            <ul className="mt-2 space-y-2 pl-4">
              {item.children.map(child => (
                <li key={child.id}>
                  <a
                    href={`#${child.id}`}
                    className="block text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export function ArticleTableOfContents({ items, title }: TocProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <nav className="sticky top-24 space-y-4">
      <h3 className="font-semibold text-sm text-muted-foreground">{title}</h3>
      <TocList items={items} />
    </nav>
  )
}

export function MobileArticleTableOfContents({ items, title }: TocProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <details className="lg:hidden border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <summary className="flex items-center justify-between px-4 py-3 text-sm font-medium cursor-pointer">
        <span>{title}</span>
        <span className="text-xs text-muted-foreground">▼</span>
      </summary>
      <div className="px-4 pb-4">
        <TocList items={items} />
      </div>
    </details>
  )
}
