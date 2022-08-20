interface props {
    url: string;
    text: string;
}

export default function HeaderMenuItemActive(props:props) {
    return (
        <li>
            <a href={props.url} className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">{props.text}</a>
        </li>
    )
  }
  