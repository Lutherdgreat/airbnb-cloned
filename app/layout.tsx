import { Nunito } from "next/font/google";

import "./globals.css";
import NavBar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentuser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

export const metadata = {
	title: "Airbnb",
	description: "Airbnb Clone",
};

const font = Nunito({
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentuser();
	return (
		<html lang="en">
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<RentModal />
					<RegisterModal />
					<LoginModal />
					<NavBar currentUser={currentUser} />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
