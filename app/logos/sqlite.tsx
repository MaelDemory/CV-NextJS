import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/sqlite.svg";

export default function SQLiteLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>SQLite</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="SQLite Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}