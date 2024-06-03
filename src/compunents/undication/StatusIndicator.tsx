
type activatorType = {activator: number}

export default function StatusIndicator({activator}: activatorType) {


    return (
        <div className="flex">
            <div className={activator > 1 ? 'activeIndicator indicator': "indicator"}></div>
            <div className={activator > 2 ? 'activeIndicator indicator': "indicator"}></div>
            <div className={activator > 3 ? 'activeIndicator indicator': "indicator"}></div>
            <div className={activator > 4 ? 'activeIndicator indicator': "indicator"}></div>
            <div className={activator > 5 ? 'activeIndicator indicator': "indicator"}></div>
        </div>
        )
}
