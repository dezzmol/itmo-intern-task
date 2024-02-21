import {FC, useState} from "react";
import ModalWindow from "@/shared/ui/Modal/ui/Modal.tsx";
import Input, {InputSize} from "@/shared/ui/Input/Input.tsx";
import Textarea from "@/shared/ui/Textarea/Textarea.tsx";

interface Props {
    setIsOpen: (flag: boolean) => void
    isOpen: boolean
}

const ReverseForm: FC<Props> = ({isOpen, setIsOpen}) => {
    const [fullname, setFullname] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [directionOfStudy, setDirectionOfStudy] = useState<string>("")
    const [courseSource, setCourseSource] = useState<string>("")
    const [comments, setComments] = useState<string>("")

    const confirmFunc = async () => {
        console.log("confirmFunc")
    }

    return (
        <ModalWindow
            title={"Запрос по курсу"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onConfirm={confirmFunc}
        >
            <h3>ФИО</h3>
            <Input size={InputSize.MEDIUM} value={fullname} onChange={(e) => setFullname(e.target.value)}/>
            <h3>Номер телефона</h3>
            <Input size={InputSize.MEDIUM} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <h3>Электронная почта</h3>
            <Input size={InputSize.MEDIUM} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h3>Направление курса</h3>
            <Input size={InputSize.MEDIUM} value={directionOfStudy} onChange={(e) => setDirectionOfStudy(e.target.value)}/>
            <h3>Источник информации о курсах</h3>
            <Input size={InputSize.MEDIUM} value={courseSource} onChange={(e) => setCourseSource(e.target.value)}/>
            <h3>Комментарии</h3>
            <Textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        </ModalWindow>
    );
};

export default ReverseForm;