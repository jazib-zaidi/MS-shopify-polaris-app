import { useState, useCallback, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import {
  Page,
  Card,
  Button,
  BlockStack,
  DataTable,
  InlineStack,
  Thumbnail,
  Modal,
  Checkbox,
  Select,
  TextField,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const query = `
    {
      products(first: 100) {
        edges {
          node {
            id
            title
            status
            vendor
            images(first: 10) {
              nodes {
                src
                url
              }
            }
          }
        }
      }
    }
  `;
  const queryResponse = await admin.graphql(query);
  const queryResponseJson = await queryResponse.json();
  return json({
    fetchedProducts: queryResponseJson.data.products,
  });
};

export default function ProductScreen() {
  const { fetchedProducts } = useLoaderData();
  const fetcher = useFetcher();
  // const prisma = new PrismaClient();

  async function fetchData() {
    const url = '/api/session'
    const res = await fetch(url);
    const data = await res.json();
console.log(data)
  }

useEffect(()=>{
  fetchData()
},[])









































  // Available columns
  const allColumns = [
    { key: "id", label: "ID" },
    { key: "title", label: "Title" },
    { key: "status", label: "Status" },
    { key: "image", label: "Image" },
    { key: "vendor", label: "Vendor" },
  ];

  // State for selected columns
  const [selectedColumns, setSelectedColumns] = useState([
    "id",
    "title",
    "status",
    "image",
  ]);

  // State for column selection modal
  const [modalActive, setModalActive] = useState(false);

  // State for filter modal
  const [filterModalActive, setFilterModalActive] = useState(false);

  // State for filter conditions
  const [filter, setFilter] = useState({
    column: "title",
    condition: "contains",
    value: "",
  });

  // Toggle modals
  const toggleModal = useCallback(() => setModalActive((prev) => !prev), []);
  const toggleFilterModal = useCallback(
    () => setFilterModalActive((prev) => !prev),
    []
  );

  // Handle checkbox change for column selection
  const handleColumnChange = (key) => {
    setSelectedColumns((prevColumns) =>
      prevColumns.includes(key)
        ? prevColumns.filter((col) => col !== key)
        : [...prevColumns, key]
    );
  };

  // Handle filter updates
  const handleFilterChange = (field, value) => {
    setFilter((prev) => ({ ...prev, [field]: value }));
  };

  // Filtering logic
  const applyFilter = (product) => {
    const { column, condition, value } = filter;
    const productValue = product[column]?.toLowerCase() || "";

    if (condition === "contains") {
      return productValue.includes(value.toLowerCase());
    }
    if (condition === "is empty") {
      return productValue === "";
    }
    if (condition === "is not empty") {
      return productValue !== "";
    }
    if (condition === "equals") {
      return productValue === value.toLowerCase();
    }
    return true;
  };

  // Prepare filtered table rows
  const productRows =
    fetchedProducts?.edges
      .map(({ node }) => {
        const cleanId = node.id.replace("gid://shopify/Product/", "");
        const imageSrc = node.images.nodes[0]?.src;

        let row = { id: cleanId, title: node.title, status: node.status, vendor: node.vendor };
        if (selectedColumns.includes("image")) {
          row.image = imageSrc ? (
            <Thumbnail source={imageSrc} alt={node.title} size="small" />
          ) : (
            "No image"
          );
        }

        return row;
      })
      .filter(applyFilter) || [];

  // Convert objects to arrays for DataTable
  const tableRows = productRows.map((row) =>
    selectedColumns.map((col) => row[col] || "-")
  );

  return (
    <Page>
      <TitleBar title="Products" />
      <Card sectioned>
pmax
        </Card>
      <BlockStack gap="100">
        <Card sectioned>
          <InlineStack gap="300">
            <Button primary onClick={() => fetcher.load(window.location.href)}>
              Refresh Products
            </Button>
            <Button onClick={toggleModal}>Select Columns</Button>
            <Button onClick={toggleFilterModal}>Filter Products</Button>
          </InlineStack>
        </Card>
        <Card title="Fetched Products">
          <DataTable
            columnContentTypes={selectedColumns.map(() => "text")}
            headings={allColumns
              .filter((col) => selectedColumns.includes(col.key))
              .map((col) => col.label)}
            rows={tableRows}
          />
        </Card>
      </BlockStack>


      <Modal open={modalActive} onClose={toggleModal} title="Select Columns">
        <Modal.Section>
          {allColumns.map((column) => (
            <Checkbox
              key={column.key}
              label={column.label}
              checked={selectedColumns.includes(column.key)}
              onChange={() => handleColumnChange(column.key)}
            />
          ))}
        </Modal.Section>
        <Modal.Section>
          <InlineStack>
            <Button onClick={toggleModal} primary>
              Apply Changes
            </Button>
          </InlineStack>
        </Modal.Section>
      </Modal>

      {/* Filter Modal */}
      <Modal open={filterModalActive} onClose={toggleFilterModal} title="Filter Products">
        <Modal.Section>
          <Select
            label="Select Attribute"
            options={allColumns.map((col) => ({
              label: col.label,
              value: col.key,
            }))}
            value={filter.column}
            onChange={(value) => handleFilterChange("column", value)}
          />

          <Select
            label="Condition"
            options={[
              { label: "Contains", value: "contains" },
              { label: "Equals", value: "equals" },
              { label: "Is Empty", value: "is empty" },
              { label: "Is Not Empty", value: "is not empty" },
            ]}
            value={filter.condition}
            onChange={(value) => handleFilterChange("condition", value)}
          />

          {filter.condition !== "is empty" && filter.condition !== "is not empty" && (
            <TextField
              label="Value"
              value={filter.value}
              onChange={(value) => handleFilterChange("value", value)}
            />
          )}
        </Modal.Section>

        <Modal.Section>
          <InlineStack>
            <Button onClick={toggleFilterModal} primary>
              Apply Filter
            </Button>
          </InlineStack>
        </Modal.Section>
      </Modal>
    </Page>
  );
}
