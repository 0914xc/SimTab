import { useEffect, useState } from 'react'

type ClockProps = {
    className?: string
}

const Clock: React.FC<ClockProps> = props => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => setClock(new Date().toLocaleTimeString()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={props.className}>
            <div className="text-8xl my-10 color-white" style={{ fontFamily: 'monospace' }}>
                {clock}
            </div>
        </div>
    )
}
export default Clock
