import React from "react";
import "moment/locale/ru";
import { searchRules, setRules } from "../../../redux/slices/rules";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import RolesDrop from "./FilterByRoles";
import FilterByTasks from "./FilterByTasks";
import Button from "../../Shared/Button";

export default function FilterSection({ rules, cards, roles }) {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  const rulesFilter = useAppSelector(state => state.rules.filter)


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

  return (
    <div>
      <div>
        <RolesDrop roles={roles} />
        {rulesFilter.role !== null && <FilterByTasks tasks={rulesFilter.role.attributes.tasks} />}
      </div>
      {cards.length === 0 && (
        <div>
          <div>
            По вашему запросу ничего не нашлось
          </div>
          <div onClick={() => clear()}>
            <Button>Очитстить</Button>
          </div>
        </div>
      )}
    </div>
  );
}
