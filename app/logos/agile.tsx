import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/methode_agile.png";

export default function AgileLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Méthodes agiles</CardTitle>
            </CardHeader>
            <CardContent className='justify-center'>
                <Image src={logo} alt="Logo méthodes agiles" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}