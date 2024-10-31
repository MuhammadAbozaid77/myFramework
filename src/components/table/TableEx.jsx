import Table from "./Table";

export default function TableEx() {
  return (
    <>
      <Table>
        <Table.Header>
          <Table.HeadCell>head cell 1</Table.HeadCell>
          <Table.HeadCell>head cell 2</Table.HeadCell>
          <Table.HeadCell>head cell 3</Table.HeadCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowCell>Row cell 1</Table.RowCell>
            <Table.RowCell>Row cell 1</Table.RowCell>
            <Table.RowCell>Row cell 1</Table.RowCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}
