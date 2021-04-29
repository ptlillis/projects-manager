import Dev from './Dev'

const Developers = ({ developers, onDelete, onToggle }) => {


    return (
        <>
            {developers.map((developer, index) => (
                <Dev
                    key={index}
                    developer={developer}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </>
    )
}

export default Developers