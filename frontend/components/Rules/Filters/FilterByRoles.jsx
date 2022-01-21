/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import React from "react";
import {filterRulesByRole, clearFilterRules} from "../../../redux/slices/rules";
import Select from 'react-select'
import styled from "styled-components";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RolesDrop({ roles }) {
  const defaultRoles = [
    {
      id: 'all',
      attributes: {
        name: "Все специальности",
        tasks: {
          data: []
        }
      }
    },
    ...roles,
  ];

  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(defaultRoles[0]);

  React.useEffect(() => {
      return dispatch(filterRulesByRole(selected));
  }, [selected]);

  const filterRoles = defaultRoles.map(role =>
      ({...role, value: role.attributes.name, label: role.attributes.name}))

  return (
      <Wrapper>
        <Select
            options={filterRoles}
            onChange={items => setSelected(items)}
            defaultValue={filterRoles[0]}
        />
      </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 80px;
  width: 280px;
  bottom: 25px;
  border: 1px solid #B1B1B1;
  margin-bottom: 32px;
`
