import type { DialogTriggerProps } from "@kobalte/core/dialog";
import { Title } from "@solidjs/meta";
import { Index } from "solid-js";
import { Button } from "~/components/ui/button";
import {
  DatePicker,
  DatePickerContent,
  DatePickerContext,
  DatePickerInput,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerView,
  DatePickerViewControl,
  DatePickerViewTrigger,
} from "~/components/ui/date-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

const DatePickerDemo = () => {
  return (
    <DatePicker>
      <DatePickerInput placeholder="Pick a date" />
      <DatePickerContent>
        <DatePickerView view="day">
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerViewTrigger>
                    <DatePickerRangeText />
                  </DatePickerViewTrigger>
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableHead>
                    <DatePickerTableRow>
                      <Index each={api().weekDays}>
                        {(weekDay) => (
                          <DatePickerTableHeader>
                            {weekDay().short}
                          </DatePickerTableHeader>
                        )}
                      </Index>
                    </DatePickerTableRow>
                  </DatePickerTableHead>
                  <DatePickerTableBody>
                    <Index each={api().weeks}>
                      {(week) => (
                        <DatePickerTableRow>
                          <Index each={week()}>
                            {(day) => (
                              <DatePickerTableCell value={day()}>
                                <DatePickerTableCellTrigger>
                                  {day().day}
                                </DatePickerTableCellTrigger>
                              </DatePickerTableCell>
                            )}
                          </Index>
                        </DatePickerTableRow>
                      )}
                    </Index>
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView
          view="month"
          class="w-[calc(var(--reference-width)-(0.75rem*2))]"
        >
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerViewTrigger>
                    <DatePickerRangeText />
                  </DatePickerViewTrigger>
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableBody>
                    <Index
                      each={api().getMonthsGrid({
                        columns: 4,
                        format: "short",
                      })}
                    >
                      {(months) => (
                        <DatePickerTableRow>
                          <Index each={months()}>
                            {(month) => (
                              <DatePickerTableCell value={month().value}>
                                <DatePickerTableCellTrigger>
                                  {month().label}
                                </DatePickerTableCellTrigger>
                              </DatePickerTableCell>
                            )}
                          </Index>
                        </DatePickerTableRow>
                      )}
                    </Index>
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView
          view="year"
          class="w-[calc(var(--reference-width)-(0.75rem*2))]"
        >
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerViewTrigger>
                    <DatePickerRangeText />
                  </DatePickerViewTrigger>
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableBody>
                    <Index
                      each={api().getYearsGrid({
                        columns: 4,
                      })}
                    >
                      {(years) => (
                        <DatePickerTableRow>
                          <Index each={years()}>
                            {(year) => (
                              <DatePickerTableCell value={year().value}>
                                <DatePickerTableCellTrigger>
                                  {year().label}
                                </DatePickerTableCellTrigger>
                              </DatePickerTableCell>
                            )}
                          </Index>
                        </DatePickerTableRow>
                      )}
                    </Index>
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
      </DatePickerContent>
    </DatePicker>
  );
};

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <h1>Home</h1>

      <Dialog>
        <DialogTrigger
          as={(props: DialogTriggerProps) => (
            <Button variant="outline" {...props}>
              Edit Profile
            </Button>
          )}
        />
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <DatePickerDemo />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
