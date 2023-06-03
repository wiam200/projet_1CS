import {
  setModelAddIsVisible,
  setModelAddUserIsVisible,
  setModelTransferIsVisible,
} from "@/store/reducers/uiReducer";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function ModelBackup(props) {
  const showTransferModel = useSelector(
    (state) => state.ui.modelTransferIsVisible
  );
  const showAddModel = useSelector((state) => state.ui.modelAddIsVisible);
  const showAddUserModel = useSelector(
    (state) => state.ui.modelAddUserIsVisible
  );

  const dispatch = useDispatch();
  return (
    <div>
      {(showAddModel || showTransferModel || showAddUserModel) && (
        <div className=" w-[100vw] h-screen fixed top-0 center left-0 z-100 bg-[#083f5a]/50">
          <div className=" bg-white w-[95%] md:w-[70%] lg:w-[35%] py-12 px-8 md:px-16 rounded-[10px] shadow-lg center flex-col space-y-10 ">
            <div className="w-full center justify-end">
              <IoCloseCircle
                className=" w-8 h-8 hover:text-[#083f5a] cursor-pointer"
                onClick={(state) => {
                  if (showAddModel) {
                    dispatch(setModelAddIsVisible(false));
                  } else if (showTransferModel) {
                    dispatch(setModelTransferIsVisible(false));
                  } else if (showAddUserModel) {
                    dispatch(setModelAddUserIsVisible(false));
                    console.log(showAddUserModel);
                  }
                }}
              />
            </div>

            {props.children}
          </div>
        </div>
      )}
    </div>
  );
}

export default ModelBackup;
