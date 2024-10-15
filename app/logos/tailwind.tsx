import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/tailwind.svg";

export default function TailwindLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Tailwind</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Tailwind Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}