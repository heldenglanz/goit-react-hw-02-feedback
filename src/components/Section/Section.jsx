import s from './Section.module.css'

function Section({ title, children }) {
    return (
        <>
            <p className={s.title}>{title}</p>
            {children}
        </>

    )
}
export default Section