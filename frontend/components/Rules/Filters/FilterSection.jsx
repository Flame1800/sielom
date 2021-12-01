import Link from "next/link";
import React from "react";
import moment from "moment";
import "moment/locale/ru";
import { searchRules, setRules } from "../../../redux/slices/rules";
import { useAppDispatch } from "../../../redux/hooks";
import RolesDrop from "./FilterByRoles";

export default function FilterSection({ rules, cards, roles }) {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (searchValue.length === 0) {
      dispatch(setRules(rules));
    }
  }, [searchValue]);

  const search = ({ target }) => {
    setSearchValue(target.value);
    dispatch(searchRules(searchValue));
  };

  const clear = () => {
    setSearchValue("");
    dispatch(setRules(rules));
  };

  const searchBlock = (
    <div className="h-16 my-5 flex justify-center items-center flex-col w-full">
      <div className="h-full w-full rounded-xl bg-gray-200 flex items-center">
        <input
          type="text"
          placeholder="Поиск..."
          value={searchValue}
          onChange={(e) => search(e)}
          className="placeholder-gray-700 bg-none
                                text-xl pl-5 focus:outline-none h-full w-full rounded-xl bg-gray-200"
        />
        {searchValue.length !== 0 && (
          <img
            className="h-5 mr-5 cursor-pointer"
            onClick={() => clear()}
            src="img/сlose-icon.png"
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full w-4/6 mx-auto mb-10">
      <div className="w-full">
        <RolesDrop roles={roles} />
      </div>
      {cards.length === 0 && (
        <div className="mt-20">
          <div className="text-center w-full text-lg mb-2">
            По вашему запросу ничего не нашлось
          </div>
          <div
            onClick={() => clear()}
            className="text-center w-full text-lg text-blue-600 cursor-pointer"
          >
            Очитсить
          </div>
        </div>
      )}
    </div>
  );
}
