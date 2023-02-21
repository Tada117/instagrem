import { PostModalKeys } from "constants/ModalKey";
import { useContext } from "react";
import uuid from "react-uuid";
import { PostModalContext } from "../../context/ModalProvider";

interface Option {
  id: string;
  title: string;
}
const OptionsModal = () => {
  const { openModal, closeModal } = useContext(PostModalContext);

  const options: Option[] = [
    {
      id: PostModalKeys.report,
      title: "Report",
    },
    {
      id: PostModalKeys.unfollow,
      title: "Unfollow",
    },
    {
      id: PostModalKeys.post,
      title: "Go to post",
    },

    {
      id: PostModalKeys.aboutAccount,
      title: "About this account",
    },
    {
      id: "cancel",
      title: "Cancel",
    },
  ];

  const handleOptionClick = (option: Option) => {
    openModal(option.id);
    closeModal(PostModalKeys.option);
  };

  return (
    <div className="flex w-[400px] flex-col">
      {options.map((option, index) => {
        const warningText = index === 0 || index === 1;
        const key = uuid();
        return (
          <button
            key={key}
            className={`border-b-[1px] px-2 py-4 text-sm last:border-b-0 ${
              warningText && "font-bold text-red-500"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.title}
          </button>
        );
      })}
    </div>
  );
};
export default OptionsModal;
