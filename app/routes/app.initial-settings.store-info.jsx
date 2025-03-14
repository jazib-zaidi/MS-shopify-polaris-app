import {
  Box,
  Card,
  Layout,
  List,
  Page,
  Text,
  InlineStack,
  Button,
  Divider,
  FormLayout,
  Select,
  TextField,
  Collapsible,
  Banner,
} from "@shopify/polaris";

import { Link } from "@remix-run/react";
import { usePage } from "./PageContext";
import { useCallback, useState } from "react";

export default function InitialSettings() {
  const { setCurrentPage } = usePage();
  const [store, setStore] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleStoreChange = useCallback((value) => setStore(value), []);
  const handleCountryChange = useCallback((value) => setCountry(value), []);
  const handleLanguageChange = useCallback((value) => setLanguage(value), []);
  const handleFullNameChange = useCallback((value) => setFullName(value), []);
  const handleEmailChange = useCallback((value) => setEmail(value), []);
  const handlePhoneChange = useCallback((value) => setPhone(value), []);
  const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);

  const countryOptions = [
    { label: "Select country", value: "" },
    { label: "United States", value: "US" },
  ];
  const languageOptions = [
    { label: "Select language", value: "" },
    { label: "English", value: "en" },
  ];

  return (
    //    <Card className="mt-2" padding={600}>
    //        <InlineStack gap="200">
    //          <div className="my-2">
    //            <Text variant="headingXl" as="h3">
    //           Connect To Merchant Center
    //            </Text>
    //            <Text variant="bodyMd">
    //             Select an existing store or create a new one to proceed
    //            </Text>
    //          </div>
    //          <div className="my-2">
    //            <Text variant="bodyLg">
    //              We verify your Microsoft Ads billing status via API. Billing is
    //              handled by Microsoft, not Shopify. Up-to-date billing ensures your
    //              Shopping and PMax ads remain active.
    //            </Text>

    //              <span className="d-flex bg-gray-1 p-2 round-2 my-2 gap-x-2">
    //              {/* <Icon source={AlertTriangleIcon} tone="warning" /> */}
    //              <Text variant="bodyLg" as="span" tone="caution" >

    //              Billing information require
    //              </Text>
    //              </span>
    //              <div className="my-2">

    //              <Link>Add billing information in Microsoft Advertising</Link>
    //              </div>
    //              <div className="">
    //                <Button  i >Check Microsoft Ads Billing Status</Button>
    //              </div>
    //  <div className="my-3">
    //      <Divider />
    //  </div>

    //          </div>
    //          <div className="my-2">
    //              <Button
    //              url="/app/initial-settings/store-info"

    //                variant="primary"
    //                onClick={() =>
    //                  setCurrentPage([
    //                    {
    //                      id: 1,
    //                      label: "Connect ads account",
    //                      path: "/settings/ads",
    //                      status: "completed",
    //                    },
    //                    {
    //                      id: 2,
    //                      label: "Microsoft Ads Billing Status",
    //                      path: "/settings/billing",
    //                      status: "completed",
    //                    },
    //                    {
    //                      id: 3,
    //                      label: "Store information",
    //                      path: "/settings/store",
    //                      status: "inProgress",
    //                    },
    //                  ])
    //                }
    //              >
    //                <Text variant="bodyLg">Confirm and Proceed</Text>
    //              </Button>

    //          </div>
    //        </InlineStack>
    //      </Card>
    // <Page title="Select an existing store or create a new one to proceed">
    <Card sectioned>
      <div className="my-2">
        <Text variant="headingXl" as="h3">
          Connect To Merchant Center
        </Text>
        <Text variant="bodyMd">
          Select an existing store or create a new one to proceed
        </Text>
      </div>
      <FormLayout>
        {/* Store Selection */}
        <InlineStack distribution="equalSpacing">
          <Select
            label="Select Store"
            options={[{ label: "Select your store", value: "" }]}
            onChange={handleStoreChange}
            value={store}
          />
          <Button primary>Create New Store</Button>
        </InlineStack>

        {/* Store Settings */}
        <InlineStack>
          <Select
            label="Target Country"
            options={countryOptions}
            onChange={handleCountryChange}
            value={country}
          />
          <TextField label="Store Currency" value="USD" disabled />
          <Select
            label="Language"
            options={languageOptions}
            onChange={handleLanguageChange}
            value={language}
          />
        </InlineStack>

        {/* User Details */}
        <InlineStack>
          <TextField
            label="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Enter your full name"
          />
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your Email"
          />
          <TextField
            label="Phone No."
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
          />
        </InlineStack>

        {/* Microsoft Product Sync */}
        <Text variant="headingMd">Microsoft Product Sync Setting</Text>
        <InlineStack>
          <Text variant="bodyMd" tone="success">
            ✅ Current Format: Global Format
          </Text>
        </InlineStack>
        <Text variant="bodySm">Example: shopify_US_123456_987654</Text>

        {/* Advanced Settings */}
        <Button plain onClick={toggleExpanded}>
          Advanced Settings {expanded ? "▲" : "▼"}
        </Button>
        <Collapsible open={expanded} id="advanced-settings">
          <Banner status="info">
            <p>
              You should not change the ID of a product if they are already
              Synced & Approved in Merchant Center. If you change the ID of a
              product, it will be treated like a new product. The product will
              need to be approved to show in ads again, which could take up to
              3-7 business days.
            </p>
          </Banner>
        </Collapsible>
      </FormLayout>
    </Card>
    // </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
