export default async function Resume() {
    return (
        <div className="container mx-auto">
            <embed
                style={{
                    width: '100%',
                    height: 'calc(100svh - 121px)',
                }}
                title="Marc Brigham resume"
                type='application/pdf'
                src="/MarcBrighamResume2023.pdf"
            />
        </div>
    )
}