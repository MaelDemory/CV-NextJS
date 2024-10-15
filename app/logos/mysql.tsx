import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/mysql.svg";

export default function MysqlLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>MySQL</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="MySQL Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}