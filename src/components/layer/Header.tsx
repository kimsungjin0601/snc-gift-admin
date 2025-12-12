interface PageHeadingProps {
    title: string;
    breadcrumbs: { label: string; path?: string }[];
}

const Header = ({ breadcrumbs }: PageHeadingProps) => {
    return (
        <div className="row wrapper border-bottom white-bg page-heading" style={{paddingTop:10, paddingBottom:10}}>
            <div className="col-lg-10">
                {/* <h2>{title}</h2> */}
                <ol className="breadcrumb">
                {breadcrumbs.map((bc, i) => (
                    <li key={i} className={i === breadcrumbs.length - 1 ? "active" : ""}>
                    {bc.path ? (
                        <a href={bc.path}>{bc.label}</a>
                    ) : (
                        <strong>{bc.label}</strong>
                    )}
                    </li>
                ))}
                </ol>
            </div>
            <div className="col-lg-2"></div>
        </div>
    )
}

export default Header