import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/plsql.svg";

export default function PLSQLLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>PLSQL</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="PLSQL Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}