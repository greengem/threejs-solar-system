import CameraHomeButton from "./CameraHomeButton"
import InfoButton from "./InfoButton"
import ExitViewButon from "./ExitViewButon"

const ControlMenu = () => {
    return (
        <div className="
            absolute top-5 left-5
            p-2
            border-2
            border-secondary-100
            rounded-xl
            bg-black
        ">
            <div className="flex gap-x-2">
                <CameraHomeButton />
                <InfoButton />
                <ExitViewButon />
            </div>
        </div>
    )
}

export default ControlMenu
