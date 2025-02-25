type HeaderProps = {
    title: string;
}

export default function Header(props: HeaderProps) {
    return (
        <div className="text-5xl font-bold text-slate-300">
            {props.title}
        </div>
    );
}