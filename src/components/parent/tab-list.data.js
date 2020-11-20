import { CardIcon, ExitIcon, FileIcon, FriendsIcon, GeerIcon, PresentIcon } from "../icons";
import Children from './child-box/children';

export const tabListData = [
  {
    icon: <GeerIcon />,
    title: "Особисті дані",
    pane: 'Особисті дані',
    subtitle: "Оформити під себе",
  },
  {
    icon: <CardIcon />,
    title: "Оплата",
    pane: 'Оплата',
    subtitle: "Карти і оплата",
  },
  {
    icon: <FileIcon />,
    title: "Тарифи",
    pane: 'Тарифи',
    subtitle: "Доступні плани",
  },
  {
    icon: <PresentIcon />,
    title: "Промокоди",
    pane: 'Промокоди',
    subtitle: "Подарунки та знижки",
  },
  {
    icon: <FriendsIcon />,
    title: "Запроси друга",
    pane: 'апроси друга',
    subtitle: "Дивіться разом",
  },
  {
    icon: <GeerIcon />,
    title: "Sweet Kids",
    pane: <Children />,
    subtitle: "Кабінети дітей",
  },
  {
    icon: <ExitIcon />,
    title: "Вийти з кабінету",
    pane: 'Вийти з кабінету',
    subtitle: "ID 595941235",
  },
];