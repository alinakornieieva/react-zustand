import { Oval } from 'react-loader-spinner'

const Loader = () => {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Oval
            height={80}
            width={80}
            color="#eadd4f"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    </div>
}

export default Loader