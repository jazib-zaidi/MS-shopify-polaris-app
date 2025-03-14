import {
  Box,
  Card,
  Layout,
  List,
  Page,
  Text,
  BlockStack,
  Button,
  Banner,
  Icon,
  Divider,
} from "@shopify/polaris";
import { AlertTriangleIcon } from "@shopify/polaris-icons";
import {
  RefreshIcon
} from '@shopify/polaris-icons';
import { Link } from "@remix-run/react";
import { usePage } from "./PageContext";

export default function InitialSettings() {
  const { setCurrentPage } = usePage();
  return (

    <Card className="mt-2" padding={600}>
      <BlockStack gap="200">
        <div className="my-2">
          <Text variant="headingXl" as="h3">
            Ensure your Microsoft Ads stay active
          </Text>
        </div>
        <div className="my-2">
          <Text variant="bodyLg">
            We verify your Microsoft Ads billing status via API. Billing is
            handled by Microsoft, not Shopify. Up-to-date billing ensures your
            Shopping and PMax ads remain active.
          </Text>


            <span className="d-flex bg-gray-1 p-2 round-2 my-2 gap-x-2">
            <Icon source={AlertTriangleIcon} tone="warning" />
            <Text variant="bodyLg" as="span" tone="caution" >

            Billing information require
            </Text>
            </span>
            <div className="my-2">

            <Link>Add billing information in Microsoft Advertising</Link>
            </div>
            <div className="">
              <Button  icon={RefreshIcon} >Check Microsoft Ads Billing Status</Button>
            </div>
<div className="my-3">
    <Divider />
</div>


        </div>
        <div className="my-2">
            <Button
            url="/app/initial-settings/store-info"

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
                    status: "completed",
                  },
                  {
                    id: 3,
                    label: "Store information",
                    path: "/settings/store",
                    status: "inProgress",
                  },
                ])
              }
            >
              <Text variant="bodyLg">Confirm and Proceed</Text>
            </Button>

        </div>
      </BlockStack>
    </Card>

  );
}


