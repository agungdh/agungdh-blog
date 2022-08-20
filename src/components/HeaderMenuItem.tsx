interface props {
    url: string
    text: string
    active?: boolean
}

export default function HeaderMenuItem(props:props) {
    const itemClass = `block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`
    const activeItemClass = `block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white`

    return (
        <li>
            <a href={props.url} className={props.active ? activeItemClass : itemClass}>{props.text}</a>
        </li>
    )
  }
  