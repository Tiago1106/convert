'use client'

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftRight, X } from "lucide-react";
import clsx from "clsx";
import { coinsType } from "@/helpers/coinsTypes";
import { useState } from "react";
import { ToggleTheme } from "@/components/toggle-theme";
import { ExchangeRate, useRates } from "@/hooks/useRates";

export default function Home() {
  const [converted, setConverted] = useState<boolean>(false);
  const [value, setValue] = useState<string>('')
  const [coin, setCoin] = useState<string>('')

  const { data, refetch } = useRates(coin);

  const handleConvert = async () => {
    await refetch();
    setConverted(true);
  }

  const handleCoin = (value: string) => {
    setConverted(false)
    setCoin(value)
  }

  const calculateConversion = (value: string, bid: string) => {
    const numericValue = parseFloat(value);
    const numericBid = parseFloat(bid);
    return (numericValue * numericBid).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center w-full h-screen pt-20 gap-5">
      <span className="font-monomaniac text-xl text-primary flex flex-row items-center gap-2">
        <ArrowLeftRight className="rotate-135" size={20} />
        Convert
        <ToggleTheme />
      </span>
      <Card className={clsx("w-[350px]", { "pb-0": converted && value.length > 0 })}>
        <CardHeader className="gap-5">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Valor</Label>
            <Input
              id="name"
              placeholder="Digite o valor"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="currency">Moeda</Label>
            <Select value={coin} onValueChange={(value) => handleCoin(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione a moeda" />
              </SelectTrigger>
              <SelectContent position="popper">
                {coinsType.map((coin) => (
                  <SelectItem key={coin.value} value={coin.value}>{coin.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="default" className="mt-5" onClick={() => handleConvert()}>
            Converter em Reais
          </Button>
        </CardHeader>
        {converted && value.length > 0 && (
          <CardFooter className="flex justify-center bg-accent rounded-b-md h-25 flex-col gap-3 relative">
            <X size={18} className="absolute right-1 top-1 cursor-pointer" onClick={() => setConverted(false)}/>
            <CardDescription>
              {`1 ${coin} = R$ ${(data as ExchangeRate).bid}`}
            </CardDescription>
            <CardTitle className="text-2xl">R$ {calculateConversion(value, (data as ExchangeRate).bid)}</CardTitle>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
