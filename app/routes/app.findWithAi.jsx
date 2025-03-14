import {
  Card,
  TextField,
  Button,
  Checkbox,
  Spinner,
  InlineStack,
  BlockStack,
  Text,
  Box,
  Divider,
  Page
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import '../app.css';

function KeywordGenerator() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState({});

  const handleChange = useCallback(
    (newValue) => setValue(newValue),
    [],
  );

  const handleCheckboxChange = useCallback(
    (keyword) => {
      setSelectedKeywords((prev) => ({
        ...prev,
        [keyword]: !prev[keyword]
      }));
    },
    [],
  );

  const callApi = async () => {
    if (!value.trim()) return;

    setLoading(true);
    setAiResponse([]);

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyDotSCOqsZxIxdtZJPSmHLIzuEn50eU18o");
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `You are a marketing expert for setting up Performance Max campaigns. Please provide 100 keywords based on this client request: ${value}. Format each keyword on a new line without numbers or bullet points.`;

      const result = await model.generateContent({
        contents: [{ parts: [{ text: prompt }] }]
      });

      const textResponse = result.response.text();
      const keywords = textResponse.split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.match(/^\d+[\.\)]/));

      setAiResponse(keywords);

      const initialSelectedState = {};
      keywords.forEach(keyword => {
        initialSelectedState[keyword] = true;
      });
      setSelectedKeywords(initialSelectedState);

    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setLoading(false);
    }
  };



  return (

    <Page>
    <Card >
      <BlockStack gap="4">
        <Text variant="headingMd">AI Keyword Generator for PMax Campaigns</Text>

        <TextField
          label="Enter your campaign details"
          value={value}
          onChange={handleChange}
          multiline={4}
          placeholder="Describe your product or service in detail. For example: 'Organic skincare products for sensitive skin, cruelty-free and sustainable packaging'"
          autoComplete="off"
        />

        <InlineStack gap="2">
          <Button primary onClick={callApi} disabled={loading}>
            {loading ? 'Generating...' : 'Generate Keywords with AI'}
          </Button>

        </InlineStack>

        {loading && (
          <Box padding="4" alignment="center">
            <BlockStack gap="4" alignment="center">
              <Spinner size="large" />
              <Text>Generating keywords, please wait...</Text>
            </BlockStack>
          </Box>
        )}

        {aiResponse.length > 0 && (
          <>
            <Divider />
            <Text variant="headingMd">Generated Keywords ({aiResponse.length})</Text>
            <Text variant="bodySm" color="subdued">Select the keywords you want to use in your campaign</Text>

            <div className="keyword-grid">
              {aiResponse.map((keyword, index) => (
                <Checkbox
                  key={index}
                  label={keyword}
                  checked={selectedKeywords[keyword] || false}
                  onChange={() => handleCheckboxChange(keyword)}
                />
              ))}
            </div>
          </>
        )}
      </BlockStack>
    </Card>
    </Page>
  );
}

export default KeywordGenerator;
