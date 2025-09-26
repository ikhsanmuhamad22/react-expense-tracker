import {
  Button,
  Divider,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  Select,
  Sheet,
  Stack,
  Typography,
  Option,
} from "@mui/joy";
import type { Transaction } from "../data/interface/transaction";
import type { CategoryExpense, CategoryIncome } from "../data/types";
import React from "react";
import { categoryExpenses, categoryIncomes } from "../data/interface/category";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../data/redux/store";
import { editTransaction } from "../data/redux/transactions/slice";

type ModalEditTxProps = {
  modal: boolean;
  setModal: (value: boolean) => void;
  dataTx: Transaction | undefined;
};

function ModalEditTx({ modal, setModal, dataTx }: ModalEditTxProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<
    CategoryExpense | CategoryIncome | undefined
  >(dataTx?.category);
  const [inputNote, setInputNote] = React.useState<any>(dataTx?.note || "");
  const [inputAmount, setInputAmount] = React.useState<any>(
    dataTx?.amount ? String(dataTx.amount) : ""
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    if (dataTx) {
      setSelectedCategory(dataTx.category);
      setInputNote(dataTx?.note);
      setInputAmount(dataTx.amount);
    }
  }, [dataTx]);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={modal}
      onClose={() => {
        setModal(false);
      }}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          sx={{ fontWeight: "lg", mb: 1 }}
        >
          Edit your {dataTx?.type}
        </Typography>
        <form
          onSubmit={(event) => {
            if (!dataTx) return;

            event.preventDefault();
            const data: Transaction = {
              id: dataTx.id,
              type: dataTx.type,
              note: inputNote,
              amount: Number(inputAmount),
              category: selectedCategory || "other",
              date: dataTx.date,
            };
            setModal(false);

            dispatch(editTransaction(data));
          }}
        >
          <Stack spacing={2} sx={{ px: 4, py: 2 }}>
            <Stack spacing={1}>
              <FormLabel>Your {dataTx?.type}</FormLabel>
              <Input
                value={inputNote}
                onChange={(e) => setInputNote(e.target.value)}
                placeholder="note"
                required
              />
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Amount</FormLabel>
              <Input
                type="number"
                placeholder="Amount"
                startDecorator={"Rp"}
                value={inputAmount}
                onChange={(e) => setInputAmount(Number(e.target.value))}
                endDecorator={
                  <React.Fragment>
                    <Divider orientation="vertical" />
                    <Typography pl={1}>IDR</Typography>
                  </React.Fragment>
                }
              />
            </Stack>
            <Stack spacing={1}>
              <FormLabel>Category</FormLabel>
              <Select
                value={selectedCategory}
                placeholder="Category"
                variant="outlined"
                slotProps={{
                  listbox: {
                    placement: "bottom-end",
                    disablePortal: true,
                  },
                }}
                onChange={(_, value) => setSelectedCategory(value!)}
              >
                {dataTx?.type === "expense"
                  ? categoryExpenses.map((c) => (
                      <Option id={c.value} value={c.value}>
                        {c.label}
                      </Option>
                    ))
                  : categoryIncomes.map((c) => (
                      <Option id={c.value} value={c.value}>
                        {c.label}
                      </Option>
                    ))}
              </Select>
            </Stack>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Sheet>
    </Modal>
  );
}

export default ModalEditTx;
