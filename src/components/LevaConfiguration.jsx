import { Leva } from 'leva'

export default function LevaConfiguration() {
    return (
        <>
            <Leva
                hidden={import.meta.env.VITE_ENV == 'production'} // default = false, when true the GUI is hidden
            />
        </>
    )
}