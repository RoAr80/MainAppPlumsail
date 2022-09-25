import {
  IColumn,
  IListProps,
  SearchBox,
  SelectionMode,
  ShimmeredDetailsList,
  Stack,
} from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { dbProvider } from "../../config/config";
import * as GetRation from "../../interfaces/IGetRation";
import { IGetRation } from "../../interfaces/IGetRation";

const shimmeredDetailsListProps: IListProps = {
  renderedWindowsAhead: 0,
  renderedWindowsBehind: 0,
};

export default function SearchPage() {
  const [columns, setColumns] = useState<IColumn[]>([
    {
      key: "column1",
      name: "ID",
      fieldName: GetRation.ID,
      // headerClassName: globalStyles.rowDetListHeader,
      // className: globalStyles.rowDetListItem,
      minWidth: 20,
      maxWidth: 20,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
      onRender: (item: IGetRation) => {
        return <NavLink to={`/DietForm?id=${item.id}`}>{item.id}</NavLink>;
      },
    },
    {
      key: "column2",
      name: "Keywords",
      fieldName: GetRation.KEYWORDS,
      minWidth: 84,
      maxWidth: 112,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
  ]);
  const [items, setItems] = useState<IGetRation[]>();
  const [query, setQuery] = useState<string>();
  const [timer, setTimer] = useState<number>();

  useEffect(() => {
    setupRations("");
  }, []);

  function setupRations(query: string) {
    dbProvider.searchRations(query).then((res) => {
      setItems(res);
    });
  }

  const onSearchChange = (
    event?: React.ChangeEvent<HTMLInputElement> | undefined,
    newValue?: string | undefined
  ) => {
    if (newValue === undefined) return;
    console.log("Newvalue: ", newValue);
    clearTimeout(timer);
    const newTimer = window.setTimeout(() => {
      setupRations(newValue);
    }, 1000);
    setTimer(newTimer);
  };

  return (
    <Stack>
      <Stack horizontalAlign="start">
        <SearchBox placeholder="Search" onChange={onSearchChange} />
        <NavLink to="/DietForm">Create new</NavLink>
      </Stack>
      <ShimmeredDetailsList
        setKey="items"
        ariaLabelForShimmer="Content is being fetched"
        ariaLabelForGrid="Item details"
        items={items || []}
        columns={columns}
        selectionMode={SelectionMode.none}
        // enableShimmer={itemsLoadingState === LoadingState.Started}
        listProps={shimmeredDetailsListProps}
        // className={styles.detListContainer}
      />
    </Stack>
  );
}
