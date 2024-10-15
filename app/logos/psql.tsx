import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/psql.svg";

export default function PsqlLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>PostGreSQL</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="PostGreSQL Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}