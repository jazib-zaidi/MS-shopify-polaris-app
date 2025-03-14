import { Link } from "@remix-run/react";


import {
  Page,
  Card,
  Button,
  Text,
  Box,
  List,
  Divider,
  Banner,
  Layout,
} from "@shopify/polaris";
import "../login.css";
export default function ProductScreen() {
  return (
    <Page>
      <Box className="m4"></Box>

      <Card padding={600}>
        <div className="margin-bottom-top-16">
          <Text variant="headingXl" as="h3">
            Welcome to Muzaara Bing Shopping & PMax for Shopify
          </Text>
        </div>
        <Box>
          <Banner
            title="To proceed make sure you have microsoft ads account"
            tone="info"
          >
            <p>
              You need to get started <a href="">Click here to create one</a>{" "}
              <br />
              Come back to this page once you have completed sign up to continue
              setup through Shopify
            </p>
          </Banner>
          <div className="margin-bottom-top-16">
            <Layout>
              <Layout.Section>
                <div className="margin-bottom-top-16">
                  <Text variant="headingLg" as="h3">
                    Important Information
                  </Text>
                </div>
                <div>
                  <List type="bullet">
                    <List.Item>
                      <Text variant="bodyLg" as="lg">
                        Product Image cannot contain in the background
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text variant="bodyLg" as="lg">
                        Product Image cannot contain in the background
                      </Text>
                    </List.Item>
                    <List.Item variant='bodyLg'>
                    <Text variant="bodyLg" as="lg">
                    All product require title and description</Text>
                    </List.Item>
                    <List.Item>
                      <Text variant="bodyLg" as="lg">
                      Product must confirm{" "}
                      <a href="">Microsoft Advertising policies</a>
                      </Text>

                    </List.Item>
                  </List>
                </div>
              </Layout.Section>
              <Layout.Section variant="oneThird">
                <img
                  alt=""
                  width="170"
                  height="170"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="/microsoft-channels-banner.png"
                />
              </Layout.Section>
            </Layout>
          </div>

          <div className="margin-bottom-top-16">

          <Divider />

          </div>

          <Link to={"/app/initial-settings"}>
            <Button variant="primary">
              {" "}
              <img src="/microsoft.svg" alt="" /> Sign In with Microsoft
            </Button>
          </Link>
        </Box>
      </Card>
    </Page>
  );
}
