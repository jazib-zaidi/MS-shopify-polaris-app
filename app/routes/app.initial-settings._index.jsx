import {
  Box,
  Card,
  Text,
  BlockStack,
  Banner,
  Select,
  Button,
  Page,
} from "@shopify/polaris";
import { Link} from "@remix-run/react";
import { useState } from "react";
import { usePage } from "./PageContext"; // Import usePage to access current page

export default function ConnectAccount() {
  const { setCurrentPage } = usePage();
  const [selectedAccount, setSelectedAccount] = useState("");

  const accountOptions = [
    { label: "Select an account", value: "" },
    { label: "Account 1", value: "account1" },
    { label: "Account 2", value: "account2" },
    { label: "Account 3", value: "account3" },
  ];
  return (

    <Card padding={600}>
      <BlockStack gap="200">
        <div className="my-2">
        <Text variant="headingXl" as="h3">
          Please select Advertisement account to authenticate
        </Text>
        </div>
        <div className="my-2">
        <Banner
          tone=""

        >
          <Text variant="bodyLg" >
            <div className='my-3'>
            Please select an advertisement account to authenticate <br />
            <a href="">Click here to create one</a> Come back to this page once
            you have completed sign up to continue setup through Shopify
            </div>
          </Text>
        </Banner>
        </div>
        <div className="my-2">
        <Select
          label="Select Advertisement Account"
          options={accountOptions}
          onChange={setSelectedAccount}
          value={selectedAccount}
        />
        </div>
        <div className="my-2">
          <Button
          url="/app/initial-settings/microsoft-payment"
          variant="primary"
            onClick={() =>
              setCurrentPage([
                {
                  id: 1,
                  label: "Connect ads account",
                  path: "/settings/ads",
                  status: "completed",
                },
                {
                  id: 2,
                  label: "Microsoft Ads Billing Status",
                  path: "/settings/billing",
                  status: "inProgress",
                },
                {
                  id: 3,
                  label: "Store information",
                  path: "/settings/store",
                  status: "notComplete",
                },
              ])
            }
          >
            <Text  variant="bodyLg" >
            Confirm and Proceed
            </Text>
          </Button>

        </div>
      </BlockStack>
    </Card>

  );
}
