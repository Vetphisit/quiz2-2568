
import { Button, Stack, Title, Divider, Container } from "@mantine/core";



export default function ExpenseTracker() {

 const registerBtnOnClick = () => {

 }

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button onClick={registerBtnOnClick}>Add Expense Item</Button>
      {/* Type additional AddExpenseModal here. */}
      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{"Food: 0 Baht"}</Stack>
      <Stack my="sm">{"Transport: 0 Baht" }</Stack>
      <Stack my="sm">{"Entertainment: 0 Baht" }</Stack>
      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}
