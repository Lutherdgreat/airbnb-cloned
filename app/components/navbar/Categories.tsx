"use client";
import Container from "../Container";

import { IoDiamond } from "react-icons/io5";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
	GiBarn,
	GiBoatFishing,
	GiCastle,
	GiCaveEntrance,
	GiDesert,
	GiForest,
	GiIsland,
	GiWindmill,
} from "react-icons/gi";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
export const categories = [
	{
		label: "Beach",
		icon: TbBeach,
		description: "This property is close to the beach",
	},
	{
		label: "Windmills",
		icon: GiWindmill,
		description: "This property has windmills",
	},
	{
		label: "Modern",
		icon: MdOutlineVilla,
		description: "This property is modern",
	},
	{
		label: "CountrySide",
		icon: TbMountain,
		description: "This property is in the country side",
	},
	{
		label: "Pools",
		icon: TbPool,
		description: "This property has a pool",
	},
	{
		label: "Islands",
		icon: GiIsland,
		description: "This property is on an island",
	},
	{
		label: "Lake",
		icon: GiBoatFishing,
		description: "This property is close to a lake",
	},
	{
		label: "Skiing",
		icon: FaSkiing,
		description: "This property is close to a skiing resort",
	},
	{
		label: "Castles",
		icon: GiCastle,
		description: "This property is in a castle",
	},
	{
		label: "Camping",
		icon: GiForest,
		description: "This property has is in a snowy area",
	},
	{
		label: "Cave",
		icon: GiCaveEntrance,
		description: "This property is close to a cave ",
	},
	{
		label: "Desert",
		icon: GiDesert,
		description: "This property is in the desert",
	},
	{
		label: "Barns",
		icon: GiBarn,
		description: "This property is in the barn",
	},
	{
		label: "Lux",
		icon: IoDiamond,
		description: "This property is Luxurious",
	},
];

const Categories = () => {
	const params = useSearchParams();
	const category = params?.get("category");
	const pathname = usePathname();

	const isMainPage = pathname === "/";

	if (!isMainPage) {
		return null;
	}

	return (
		<Container>
			<div
				className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto"
			>
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						selected={category === item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;
