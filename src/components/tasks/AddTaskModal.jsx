import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setIsOpen(false)
    };
    const handleCancel = () => {
        reset()
        setIsOpen(false)
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"This is the modal title"}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title">Title</label>
                        <input required type="text" id="title" {...register("title")} className="rounded-md"/>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="description">Description</label>
                        <textarea required type="text" id="description" {...register("description")} className="rounded-md"/>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="dateline">Deadline</label>
                        <input required type="date" id="dateline" {...register("dateline")} className="rounded-md"/>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="assignTo">Priority</label>
                        <select required type="text" id="assignTo" {...register("assignTo")} className="rounded-md">
                            <option value={"Mir Hussain"}>Mir Hussain</option>
                            <option value={"Mezba Avedin"}>Mezba Avedin</option>
                            <option value={"Nahid Hassan"}>Nahid Hassan</option>
                            <option value={"Mizanur Rahman"}>Mizanur Rahman</option>
                            <option value={"Tonmoy Parbez"}>Tonmoy Parbez</option>
                            <option value={"Mehedi Anik"}>Mehedi Anik</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="priority">Priority</label>
                        <select required type="text" id="priority" {...register("priority")} className="rounded-md">
                            <option value={"high"}>High</option>
                            <option value={"medium"}>Medium</option>
                            <option value={"low"}>Low</option>
                        </select>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <button onClick={handleCancel} type="button" className="btn btn-danger">Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;
