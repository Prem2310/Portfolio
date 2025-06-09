import dayjs from "dayjs";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { CollapsibleList } from "@/components/collapsible-list";

import { Achivements } from "../../data/achivements";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { AwardItem } from "./achivements-item";

const SORTED_Achivements = [...Achivements].sort((a, b) => {
  return dayjs(b.date).diff(dayjs(a.date));
});

export function Achivement() {
  return (
    <Panel id="Achivements">
      <PanelHeader>
        <PanelTitle>
          Achivements
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({Achivements.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root type="multiple">
        <CollapsibleList
          items={SORTED_Achivements}
          max={3}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <AwardItem award={item} />}
        />
      </AccordionPrimitive.Root>
    </Panel>
  );
}
