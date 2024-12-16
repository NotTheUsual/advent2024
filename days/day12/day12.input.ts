const input = `IIIIIIIIIIIIIIIIIIIIIUUUUUUUUJLLLLAAAAAAMMMAUUUUPPXPZZZZZZZZZZZXXXXXXXXXXXXXXXXXXXXXFFFFFFFFFFZZZZZZZZZTTTTTTTVVVVVVVVVVPVRRRRRJOYOOOOOOOOOO
IIIIIIIIIIIIIIIIIIIIUUUUUUUUUJALEAAAAAAAAAAAAUUUUPXPPZZZZZHHHHHHXHXXXXXXXXXXXXXXXXXXFXFFFFFFFFZZZZZZZZZTTTTTTTTVVVVVVVVVVVRRRSRROOOOOOOOOOOO
IIIIIIIIIIIIIIIIIIIIUUUUUUUUUJAAAAAAAAAAAAAAUUPPPPPPPZZZZZZZHHHHHHHXXXXXXXXXXXXXXXXXXXFFFFFFFFFZZZZZZZTTTTTTTTTVVVVVVVVVVVRRSSKKOOOOOOOOOOOO
IIIIIIIIIIIAAIIIIIIIIIUUUUUUUJJAAAAAAAAAAAAAAVVPPPPPPPPZHHHHHHHHHHHXXXXXXXXXXXXXXXXXFFFFFFFFFFFZZZZZZZTTTTTTTTVVVVVVVVKVVVVDSSSSOOOOOOOOOOOO
IOOIIIIIIIIAAIIIIIIIIIIUUUQVUJJAAAAAAAAAAAAAEVVZPPPPPPPHHHHHHHHHHHHXXXXXXXXXXXXXXXXXXXXFFFFFFLLLLALLLLTTTTTTTTVVVVVVVVVVVVVVSSSSOOOOOOOOOOOO
OOOOOOOOIIAAAAAIIIIIIIIUQQQQVQJAAAAAAAAAAAAAAVVPPPPPIIHHHHHHHHHHHHHXXXXXUXXXXXXUUXXBBBSFFFLLLLLLLLLLLLLLTTTTTTVVVVVVVVVVVVVCCSSSSSOOOOOOOOOO
OOOOOOOOIAAAAAAIIIIIIQQQQQQQQQQQEADDAAAAAAAAHHVVPPPIIIIHHHHHHHHHHHHHXXXUUUUUXXUUUXXBBBSFFFLLELLLLLLLLLLTTTTTTTVVVVVVVVVVVFVCCCYSSJJVOOOOOOOO
OOOOOOOOIIIAAIIIIIQQQQQQQQQQTQJQEEDDDAAAAAAHHVVVVPIIIIIHHHHHHHHHHHHHXUUUUUUUUUUUMMXBBBSSSFFFLLLLLLLLLLLLTTTTTTTWVVVVVVVVVVVSYYYYSJJVOOOOOOOS
OOOOOWWIIIIIIIIIIIQQQQQQQQQQTQJDDDDDDAAAHAHHHHVVIIIIIIIHIIIHHHHHHHHHUUUUUUUUUUUUMMSSBBSSSSFFFLLLLLLLLLLLTTTTTTTWVVVVVVVVVVZSHYYYSSJJOOOOOOOS
OOOOOEWIIIIIIIIDIIIQQQQQQQQQQQDDDDDDDDAHHHHHHHVHIIIIIIIIIIIHHHHHHHHHUUUUUUUUUUUUMMMSSSSSSLFLFLLLLLLLLLLLTTTTTTWWWWVVVVVUVUSSSYSSSJJJJSSSSOSS
OOOWOWWIIIDDDIDDDDIQQQQQQQQQQQQJDDDDDDAHHGGHFFVHIIIIIIIIIIIHHHHHHHLHUUUUUUUUUUUMMMSSSSSSSLLLLLLLLLLLLLLTTTTTWWWWWWVVVVVUUUSLSSSSSJJJSSSSSSSS
OOWWWWWWDDDDDDDDDQQQQQQQQQQQQQQDDDDDGGGGGGHHFFHHIIIIIIIIIHHHHHHHHHLLLLLLUUUUUUUMMMIIISSSSSRRRLLLLLLLLLLTTTTWWWWWWWVVVVVUULLLSSSSSSSSSSSSSSSS
OWWWWWWWKDDDDDDDDQQQQQQQQQQQQQNODDGGGGGGGGGHFFFHHHHIIIIIIHHHHHLLHHLLLLLUUUUUUUUIMIIIISSSSRRRRRLLLLLLLLLTTTTWWWWWWWVWVVUUULLLSSSSSZSSSSSSSSSS
OWWWWWWWWDDDDDDDDQQNQQQQQQQNNNNGGGGGGGGGGGGHHHHHHHIIIIIIIIHHHLLLLLLLLUUUUUUIUUIIIIIIIISSRRRRRLLLLLLLLLLQTTTTWWWWWWWWWVULLLLLLLSSSZSSSSSAASSS
OVVWWWWWWDDDDDDDDNNNQNQQQQQNNNNNGGGGGGGGGGGGYHHHHHHIIIIIIIIHLLLLLLLLUUUUUUUIIIIIIIIIIRSSSRRRRRRHLLLQQQQQTTTWWWWWWWWWWUUULLLLLLSZSZSZSSSAASSS
OOVWWWDDDDDLLLADDNNNNNNQQQQNNNNNHHGGGGQIGGGYYYHHHIIIIIIIIILHLLLLLLLLLLUUUUUIIIIIIIIIIRRRRRRRRRRRLLYDQQQTTTWWWWWWWWWWUULLLLLLLLLZZZSZSAAASSSS
OOOOWWWDDDDLLLLDNNNNNNNNQQNNNNIIIIGGIIIIRGYYYHHHHHHIHHHIILLLLLLLLLLLLLLUUUUIIIIIIIIIIRRRRRRRRRRRTYYYQQQWWWWWWWWWWWWWUWLCLLLLLLZZZZZZZAAAAASS
DOOWWWDDDDDLLLLLLNNNNNNQQQNNNIIIIIGIIIIIIYYYYHHHHHHHHHIIIILLLLLLLLLLLUUUUUUDDIIIIIIIIRRRRRRRRRRYYYYYYYYDJJWWWWWWWWWWWWCCLLLLLLZZZZZZZAAAAAAS
DODWWWDDLLLLLLLLLLLLLNNNNNNIIIIIIIIIIIIIIYYYYWHHHCCCHHCCCICLLLLLLLLLLUUUUUUDIIIIIIIIIIRRRRRRTTRHHHYYYJJJJJJWWWWWWWWWCCCCLLLLLZZZZZZZZAAAAAAA
DDDDWDDDLLLLLLLLLLLLLNNNNNNNIIIIIIIIIIIIHYYYRWHHHCCMCCCCCCCLLLLLLLLLLUUUUUUUIIIIIIHIIIIHRRRRRXXXXHYYYJJJJJJWWWWWWWWWCCCCCCCZZZZZZZZZAAAAAAAA
DDDDDDDDDLLLLLLLLLLLLNNNNNNNIIUUIIIIIIIIIYYWRWHHHCCCCCCCCCLLLLLLLLLULUUUUUUUUUIIIHHHIHHJYYYRXXXXXXYYYYJJJJWWWWWWWWWWTTCCCCCCCGZGGZAAAAAAAAAA
DDDDDDDDDLLLLLLLLLLLNNNNNNNNNNIIIIIIIIIOIFYWWWWHHCCCCCCCCCCCLLLLDLDUUUUUUUUUUHHHIHHHHHJJYJYRYYXXXXXXYYXBJJJJFFTTWWWTTTCCCCCGGGGGGGAAAAAAAAAA
DDDDDDDDDDLLLLLLLLLLLNNWWNNNNNNNIIIIIIIIIWWWWWWWWCCCCCCCCCCCCLCDDDDUUUUUUUUUUHHHIHHHHJJJJJYYYXXXXXXXXXXJJJOOOFTTTTTTTTTTTTGGGGGGGGAAAAAAAAAA
DDDDDDDDDDLLLLLLLLLLLNNWWNGGGGGIIIIIJJIEEWWNWWWWWCCCCCCCCCCCCCCDDDDDDUUUUUUUHHHHHHHHJJJJJRXXXXXXXXXXOXXXXOOOOFFFTTTTTTTTTOGGGGGGGGGAAAAAAAAA
DDDDDDDDDDLRLLLLLLLWLWWWWNNGGGGGGGHGJJJWWWWWWWWWWCCCCCCCCCCCCCDDDDDDDDDUUUUUJJHHHHJJJMJJJJXXXXXXXXXXXXXXXOOOOFFOOTTTTTTTTOOGGGGGGGGGAAAGAGAA
DDDDDDDDDDLRLLLLLLWWWWWWNNNNNNGGGGHGJJGMMWWWWWWWWWCCCCCCCCCCCCDDDDDDDDDVVUVUUJHHJJJJJJJJJXXXXXXXXXXXXXXXXOOOOOOOTTTTTGTGLGGGGGGGGGCGGAGGGGTA
DDDADDDDDDNLLLLLLLLLWWWWNNNNNGGGGGGGGGGMMMWWWWWWWWWCCCCCCCCCCCDDDDDDDDVVVVVUUJJJJJJJJGJJXXXXXXXXXXXXXXXXXOOOOOOOTTTTTGGGGGGGGGGGGGGGGAAVATTT
DAAADDDNNNNNLLLLLLLLLWWWNEENNGGGGGGGGGGMMMMWWWWWWWWWCCCCCCCCCCCDDDDDDDDVVVVVJJJJJJJJJJJJXXXXXXXXXXXXXXXXXOOOOOOOOTTGGGGGGGGGGGGGGGGPGAAAAATT
AAAAADDNENNNNLLLLLNNNWNNEEENNNNGGGGGGGSMWWWWWWWWWWWWCCCCCCCCCCCCCDDDDDDVVVVVJJJJJJJJJJJJJXXXXXXXXXXXXNNXOOOOOOOOOTTTTGGGGGGGGGGGGGGGGAAAAAAT
AAAANDNNENNNNNNNNLNNNNNNEEEEENNEGGSOGGSSSWWWWWWWWWWWCCCSSCCBCOCCCDDDDDDBVVVVJJJJJJJJJJJJJJXXXXXOXXXOZOOOOOOOOOOOOTTTTTTGGGGGGGGGGGGGGGLLTATT
AAAANNNNNNNNNNNNNNNNNNNNEEEEEEEEEGSSSSSSSWWWWWWWWCWWCCCSIIIIIIIIIIDBDDDBVBBVJJJJJJJJJJJJJXXJJXXOOOOOZOOOOOOOOOOOOTYTTTGGGGGGGGGGGGGMGGLLTTTT
NNSNNNNNNNNNUNNNNNNNNNNNNEEEEEEEEEKSSSSSSSSWWWWWWCCCCCCCIIIIIIIIIIOBDDDBBBBWWWJJJJJJJJJJJXJJJXXKOOOOOOOOOOOOOOOOFYYYYYGGGGAGGGGGGGDDGLLLTTTT
NNNNNNNNONNUUNNNNNNNNNEEEEEEEEEEEEEESISSSSWWEEWCCCCCCCCCIIIIIIIIIIBBBBBBBBWWWWJJJJJJJJJJJJJJJXOOOOOOOOOOOOOOOOOYYYYYYYYQGAAAGGGGGDDDDLLLLTLL
NNNNNNNNNTNXUNNNNNNNNEEEEEEEEEEEEEEIRISSSSSWEEWWCCCAIIIIIIIIIIIIIIOBBBBWWBBWAWWWWWJJJRJJJJJJJJJOOOOOOOODOOOOOOOYYYYYYYYYYYAAAAGGEEDDDLLLLTLL
NNNNNNNNNNXXUUUNNNNNNNEEEEEEEEEEEEEIIIISPEEWEEECCCAAIIIIIIIIIIIIIIBBWBWWWWWWWWWWWWWWWRRRJJJJJOOOOOOOOOODDOOOBYOYYYYYYYYYOOOAAAGAADDLLLLLLLLL
NNNNNNNNUUUUUUUNNNNNNEEEEEEEEEEEEEEIIIIIIIEEEEEECEAAIIIIIIIIIIIIIINBWWGGGGGGGWWWWWGGRRRRRJOJJOOOOOOOOOOODDDDYYYYYYYYYYOOOOOAAAAAALDLLLLLLLNN
NNNNNNNNNUUUUUUUNNNNNEEEEEEEEEEEEEIIIIIIIIEEEEEEEIIIIIIIIIIIIIIIIINNNWGGGGGGGGGGGWRRRRRRROOOOOOOOOOOOOOODDDDYYYYYYYYYYOOTAAAAAAAALLLLLLLLLNN
NNNNNNNNUUUTUMMNNNNEEWWEEEEEEEEEEEIIIIIIIEEEEEEEEIIIIIIIIIIIIIAANNNNNWGGGGGGGGGGGRRRRRRRRROOOOOOOOOOOOOODDDDDDYYWYYYYYYAAAAAAAAAALLLLLLLLLNN
NNNNNNNNNTTTUJNNNEEEEWEEEEEEEEEEEEIIIIIIEEEEEEEEEIIIIIIIIIIIIIANNNNNNWGGGGGGGGGGGRRRRRRRRRDDOOOOOOOOOOOODDDDDDYYYYYYYYYAAAAAAAAAALLLLLLLLLLN
NNNNNNNNNTTJJJOJNRREEEEEEEEEEEEEEIIIIIIIEEEEEEEEEIIIIIIIIIIIIINNNNNNNWGGGGGGGGGGGRRRRRRRRRRROOOOOOOOOOOOODDDDDDDDDYYYYYAAAAAAAAAAALLLLLLLNNN
NNNNNNNJTTTTTJJJRRREEEEEEEYYENNNIIIIIIEEEEEEEEEEEIIIIIIIIIIAAAANNNNGGGGGGGGGGGGGGRRRRRRRRRRROOUOOOOOOOOODDDDDDDDDDDYYYEEAAAAAAAAAALLLLLLLNNN
NNNJJNJJJTTTTJJJJJJEEEEEEEEEEEIIIIIIIIIIIEEEEEEEEIIIIIIIIIIAAAAANNNGGGGGGGGGGGGGGGGGRRRRRRRRROOOOOOOOOODDDXDDDXXXDDDYYDEAAAAAAAAAAAAALLLLNNN
NNJJJLJJJJTTJJJJJJJJEEEEEEEEEEIIIIIIIIIEIIEEEEEEFIIIIIIIIIIAAAAANNNGGGGGGGGGGGGGGGGGRRRRRRRRGXOOXXOOOOXXXXXXXXXXDDDDDDDEAAAAAAAAAAANNNLLLLNN
NNJJJJJJJFJTJJJJJJJJEEEEEEEEEEEIIIIIIIEEEEEEEEEEFIIIIIIIIIIAAAAAYNNGGGGGGGGGGGGGGGGGRRRRRORRXXXOXXXOOOXXXXXXXXXXDDDDDDDEAAAAAAAAANNNNNNLLLNN
JJJJJJJJJJJJJJJJJJJJSSSSSSSSEEEEEIIIIIIEEEEEEEEEFIIIIIIIIIIAAAAAALNGGGGGGGGGGGGGGGGGRRRRROOROQXXXXXXXXXXXXXXXXXXXDDDDDDDPAPAAAAAAAANNNNLNNNN
EEJJJJJJJJJJJJJJJJJJSSSSSSSSEEEEEIIIIIEEENEEEEEFFFFFUWWUUAAAAAALLLHGGGGGGGGGGGGGGGGGSRRRROOOOQQXXXXXXXXXXXXXXXSXXDDDDDDDPPPAAAUAAAANNNNNNNNN
EEJJJJJJJJJJJJJJJJJJSSSSSSSSEEEEEINIIIEENNEEEEEEFFFFFFWAAAAAAAAALLLGGGGGGGGGGGGGGGGGRRRRROOOOQQXQXXXXXXXXXXXXXSSDDDDDDDPPPPPPPAAAANNNNNNNNNN
ZZZZZZZZWWJJJJJJJJJJSSSSSSSSEEEEEENIINNNNNNEEFFFFFFFFFFFACAAAAIHHLHHHHHHHHGGGGGGGGGGRRRROOOOOQQQQKXXXXXXXXEGGGGGGDDDDDPPPPPPPPPPPAPNKKKKNKNN
ZZZZZZZZZZWJJJJJJJJJSSSSSSSSEEEEEENNINNNNNNNNYFFFFFFFFFFACAAAAIHHHHHHHHHGGGGGGGGGGGGOOOOOOOOOQQQQXXXXXXXXXEGGGGGGDPPDDDPPPPPPPPPPPPPPKKKKKKK
ZZZZZZZZZZWJJJJJJJJJSSSSSSSSEEEEEEENNNNNNNNNYYYYFFYFFFFAACCAAAANHHHHHHHHGGGGGGGGGGGGOOOOOOOOOOXTTXXXXXXXXGGGGGGGGPPPPPPPPPPPPPGPPGPKKKKKKKKK
HHHHHJJZZZWJJJQJJJJJSSSSSSSSEEEEENNNNNNINNNNNYJYYYYYFFFAACCAAANNHHHHHHHHGGGSSSSSSSOOOOOOOOOOOOXXXXXXXXXXXXHGGGGGGPPVVPPPPPPPPGGGGGGKKKKKKKKK
HHHHHHHZZZWQQQQQQQJQSSSSSSSSEEEEENNNNNIINNNYYYYYYYYYYFFAAAAAAAAAHHHHHHHHGGGSEPPPPPSOOOOOOOOOOOXXXXXXXXXXXHHGGGGGGVVVVPPPPPPPPGGGGGGGKKKKKKKK
HHHHHHHZZZWQQQQQQCQQSSSSSSSSEEEEENNNNIIIINNYYYYYYYYYYAAAAAAAAAAAHHHHHHHHGGGEEPPPPPSSCOOOOOOOOOOXXXXXXXXXXHHGGGGGVUVVVVPPPPPOPGGGGGGGGKKKKKKK
HHHHHHHZZZQQQQQQQQQQQUUUUBEEEBIIIIINIIIIIINYYYYYYYYYYAAAAAAAAAAAHHHHHHHHHHSEEPPPPPSCCCCCCCOOOOOXXXXXXXXXXHHGGGGGVVVVVPPPOOPOORGQGGGGGGKEEKKK
HHHHHHHZZZQQBBQQQQBQBUUUUBEBBBBIIIINIIIIIIYYYYYYYYYYAAAAAAAAAAAAHHHHHHHHHHHEEPPPPPECCCCCCCCOCCXXXXXXXXXXXXXJJJVVVVVVVVVOOOOORRGQGGGGSEEEEEKK
HHHHHHHZZZBBBBQQQBBBBBUUBBBCCBBBIIIIIIIIIIIYYYYYYYYYTHHHHAAAAAAAAAHHHHHHHHHEPPPPPPEECCCCCCCCCCXXXXXXXXXXXXXJVVVVVVVVVVOOOOOOORRQGGGEEEEVEEEK
HHHHHHHZZZBBBBBBQBBBBBBBBBBBBBBBBIIIIIIIIIIIYYYYYYYYHHHHHHAAAAAAAAHWHHBHHHHEPPPPPPECCCCCCCCCCCMXKXXXXXXXXXXJVVVVVVVVVVVSOOOOOOGGGGEEEEEEEEKK
HHHHHHBBBBBBBBBBBBBBBBBBBBBBBBBBBIIIIIIIIIIIYYYYYYYYYHHHHHAAFFFFFTTHHHHHHHHEPPPPPPEECCCCCCCCCMMXXXXXXXXXXXJJVVVVVVVVVVOOOOOOOOOKKGKKKEEEEEKK
HHHHHHTBBBBBBBBBBBBBBBBBBBBBBBBBBIIIIIIIIIIQQHHHHHHYYYHHHHHHFFFFTTTHHEEEEEEEEPPPPPEECCCCCCCCCXXXXXXXXXXXXXVVVVVVVVVVVVVOOOOOOOOOKKKKKEEEEKKK
HHHHBHBBBBBBBBBBBBBBBBBBBBBBBBBBBBIIIIIIIIIQQQHHHHHHHHHHHHFHFFFFTTTTHEEEEEEEEPPPPPEECCCCCCCCXXXXXXXXJXXXXWWVVVVVVVVVVVVOKKOOOOOOKKKKKEKEKKKK
HHHRBBBBBBBBBBBBBBBBOOOBBBBBBBBBBBBIIIIIIIIIQHHHHHHHHHHHHFFFFFFFFFFTEEEEEEEEEPPPPPFCCCCCCCCXXXXXXXXXXXXXWWWWVVVVVVVVVVVVKKOKKKKKKKEEKEKKKKKK
HHHHIBBBBBEBBBBBBBOOOOOBBOOTBBBBBBBWWWIIIIIIIQHHHHHHHHHHHHFFFFFFFFFTEEEEEEEEEPPPPPFCCCCCCCCXXXXXXXXXXXWWWWWWWWVVVVVVVVVVKKOKKKKKKKEEEEKKKKKK
RRRRBBLLBBEBBBBBBOOOOOOOOOOOBBBBBBBBWWWIIIIQQQQHQQHHHHHHFFFFFFFFFFFEEEEEEEEEEPPPPPFFCCICCCCXXXXXXXXXXXXWWWWWWWWWVVVVVVVKKKKKKKAKKKEEEEKKKKKK
RRRRRBBLRREBBBBBBOOOOOOOOOOBBBBBBBBBWWWIIIIQQQQQQQHHHHHHFFFFFFFFFFKEEEEEEEEEEEFFFFFFIIICCCCCXXXXXXXXXXXWWWWWWWWWVVQQVVVVKKKKAKAKKKEEEKKKKKKK
RRRRRBRRRRRBOBOBOOOOOOOOOOOBBBBBBBBBBWWIIIQQQQQQQQHMHHHLFFFFFFFFFFFFEEEEEEEEEFFFFFFFFIIICTCCXYXXXXXXXXXXWWWWWWWWVVQQQQQJAAKAAAAKKKEEEEKKKKKK
RRRRRRRRRRRROOOOOOOOOOOOOOBBBBBBBUBBBWIIIQQQQQQQQQQQFHHHFFFFFFFFFFFFEEEEVEEEEFFFFFFFFHHHTTCAXYYXXXXXXWWWWWWWWWWWWQQQQQAAAAAAAAAAAAEECEKKKCCC
RRRRRRRRROOROUOOOOOOOOOOOOOBBBBBBBBBBBIQBQQQQQQQQQQQFFHFFFFFFFFFFFFFFEEEVEEVVVFFFFFFHHHHTTCAYEYYYYYXWWWWWWWWWWWWQQQQQQAAAAAAAAAAMACCCCKKCCCC
RRRRRRRRROOOOUUOOOOOOOOOHOHHBBBBBBBBBBBBBQQQQQQQQQQQFFFFFFFFFPFFFUUFFFEEVEVVVVVVFFFFFHHHTTTYYYYYYNYYYYWWWWWWWWWWWQQQQQAAAAAAAAAAAAACCCCCCCCC
RRRRRRRRROOOUUUUOOOOOOOHHHHHBBBBBBBBBBBBBQQQQQQQQQQFFFPFFPFFFPPPUUUUUFUUVVVVVVVVFFFFFHHTTTYYYYYYYYYYYYWWWWWWWWWWWHQQQQQAAAAAAAAAAAAACCCCCCCC
RRRRRRRRRROOOUUUUOOOOOOTTTHBBBBBBBBBBBBMQQQQQQQQQQQFFFPPPPZPPPPPUUUUUUUUVVVVVVVVVVFHHHHHTTYYYYYYYYYYYYWWWWWWWWWWWHHQQQQAAAAAAAAAAAAACCCCCCCC
RRRRRRRRRROOUUUUUUUTTOOOTTBBHBBBBZBBBZZQQQQQQQQQQQQFFPPPPPPPPPPPUUUUUUUUUVVVVVVVVHHHHHHHHYYYYYYYYYYYTEWWWWWWWWWVJJHQQQQAAATAAAAAAAAAZCCCCCCC
RRRRRRRRRROOUUUUUIUUTTTOTTTBBBBZZZZZZZZZHQQQQQKKKKQFFPPPPPPPPPPPUUUUUUVVVVVVVVVHHHHHHHHHHYYYYYYYYYYYTEEEWWWWWJJJJJJKKQQQQQAAAAAAAAAACCCCCCCC
RRRRRRRRRROOOUUUUUTTTTTTTTTBBBBZZZZZZZZHHHXXXXXKKXXXPPPPPPPPPPPPUUUUUUVVVVVVGVVVVHHHHHHHHYYYYYYYYYYYEEEEWWWJWJJJJJKKKKQQQDDDAAAAAAAACACCCCCC
GRRRRRRRRROOUUUUUKDDTTTTTTTBBBZZZZZZZZZZHHXXXXXKKXXXPPPPPPPPPPPUUUUUUUVVGGVGGVHHHHHHHHHHHTTTYYYYYYAYEEEWWWWJJJJJJJKKKKQQQDDDDAAAAAAAAAACCCCC
GGGRRBBRROOOOUUUUKDDTDTTTTTTBBBZZZZZZZZZZGXXXXXXXXXXPPPPPPPPPPPZUUUUUUUVVGVGGGHHHHHHHHHHHTTTYYYYYYYYEEEEWWWJJJZZZZKKKKQQQDDDDAAAAAAAAAAACCCC
GGGGGGBRROOOOOOODDDDDDTTTTTTTTTZZZZZZZZGGGGGSXXXXXXXXXXPPPPPPPPUUUUUUUUGGGGGGHHHHHHHHHHHHTTTTYYYYLYEEEEEEEWWJJZZZZQQQQQQDDDDDAAAAAAAAAAACCCT
GGGGGBBOOOOODDDDDDDDDDTTTTTTTTTZZZZZZZGGGGGGSXXXXXXXXXXPPPPPPPPUUUUUUUUUGGGGGWHHHHHHHHHHHHTTTEYYYYYYEEEVEJJJJJZZZZQQQQNQPDDDDAAAAAAAAAAAAATT
GGBBBBBOOOOODDDDDDDDDDDTTTTTTTTVZZOZZGGGGGGGSXXXXXXXXXXPPPPPPPPPPUUUUUUUUGGGGGHHHHHHHHHHHHTTEEEEYYYEEEETJJJJJJZZZZQQQQNNPPDDDAAAAAAAAAAAAAAA
GGBBBBOOOODODDDDDDDDDDDDTTTTTTTVZZZZZGGGGGSSSSSSXXXXXXXXPPPPPPPPPUUPUUUURKGSSSHHHHHHHHHHTTEEEEEEYYEEEERTTJJJZZZZZZJJJJJJPPDDDADDAAAAAAAAAAAA
GBBBBBBOOODDDDDDDDDDDDDDTTTTTTTTAAAGGGGGGGSSSSSXXXXXXXXXPPPPPPPPPPPPRUVVRRSSSSSHSSSHHHHTTTEEEEEEEEEEETRTTTTGZZZZZZZZZZZZZPDDDDDAAAAAOAAAAAAL
GBBBBBBHOHDDDDDDDDDDDDDDTTTTTTTTAGAGGGGGGGGASSSXXXXXXXXXXXPPPPPPPPPRRVVRRRSSSSSSSSHHHHHTTTTEEEEEEEEETTTETTTTZZZZZZZZZZZZZPDDDOOOAAAOOAAAAAAA
GBBEHHOHHHDDDDDDDDDDDDDTTTTTTTAAAGWGGGGGGGGASSSSXXXXXXXXXPPPPPPRRRRRRRRRRRSSSSSSSSHHMMSSTTTTEEEEEEEETTTETTTTZZZZZZZZZZZZZOOODOOOAAAAAAAAAASA
GBEEEHHHHHDDDDDDDDDDDDDDDTTTTTAAAGGGGGGGGGGAASXXXXXXXXXXPPPPRRPRRRRRRRRRRRRRSSSSSSSSSMSTTTEEEEEEEEETTGTTTTTTZZZZZZZZZZZZZOGOOOOOOOSOOONASSSS
GBEHHHHHHHHDDDDDDDDDDDDDBTTTAAAAAGGGGGGGAAAAXXXXXXXXXXXGPPPPRRRRRRRRRRRRRRSSSSVVSSSSSSSSSSWWWWEEEEETEGTTTTTTZZZZZZZZZZZZZOGOOOOOOOOOOOOJJSSS
GHHHHHHHHHDDDDDDDMDDDDDDBTTAAAAAAAGGAGGAAAAAXXXXXXXXXXXGPPPPTRRRRRRRRRRRRRSSSVVGSSSSSSSSASWWWWEEEEEEETTTNTTTZZZZZZZZZZZZZOOOOOOOOOOOOOJJSSSJ
GHHHHHHHHHHDDDDDDDDDQQQDQAAAAAAAAAAGAGGAAAAAXXXXXKXXXXXXWWWPRRRRRRRRRRRRRRSVVVVGSSSSSSSSSQJJEEEEEEEEETNTNTTTZZZZZZZZZZZZZOOOOOOOOOOOOJJJJJSJ
GHGHHHHHHHHDDDDDDQQQQQQQQQQAAAAAAAAAAAAAAAAAAAAXXXXXGRRRRRRRVRRRRRRRRRRRRRGVVVVVVSVSSSSSSJJJEEEEEEEOLNNNTTTTZZZZZZZZZZZZZXOOOOOOOOOOONJJJJJJ
GGGHHHHHFFFFDBBQQQQQQQQQQQQAAAAAAAAAAAAAAAAAAAAXNNNNGRRRRRRRVRRRWRRRRRRRRRRVVVVVVVVVVSSSJJJJJJJWWEELLNNNNTTTZZZZZZZZZZZZZXOXOOOOOOOOOOOJJJJJ
GGGHHHHHFFFFFBBBQQQQQQQQQQQAAAAAASAAAAAAAAACCCXXGNGGGGGGRRRRRRURRRRRRRRRRSRRQVVVVVVVVJJJJJJJJJJJWWLLLLNNNNNTTTTTTZZZZZZXXXXXXOOOOOOOOOOIJJJI
GGGGHHHHFFFFFBGGQQQQQQQQQQQAAAAAASSSSCCCCACCCUUXGGGGGGGRRRRRRRURRRRRRRRRRSSSQVVVVVVVVVJJJJJJJJJJJWLLLLLNNNTTTTTTVZZZZZZXXXXXXOOOOOOOOOOIIIII
GGGEFFFHFFFFFFFGBGGGGGGGGQQQAASSSSSSSCCCCACCCUUUGGGGGGGGGRRGUUURTRRRTRRRRSSQQQVVVVVVRRRJJJJJJJJJWWLLLLLLNLLTTTTTTZZZZZZXXXXXXOOOOOOOOOIIIIII
GGGGPFFFFFFFNFFGGGGGGGGGGAAQQAASSSSSSCCCCCCCCUUUUGGUGGGGGGGGUUURTTRRTRRSSSQQQQVVVVVVRRRRJJJJJJJJWWWWLLLLLLLLGTTTAZZZZZZIXXXXXOOOOOOIXXIIIIIK
GGGGPPPFFFLFFFTGGGGGGGGGGNAQAASSSSSSZZCCCCCCCCUUUUGUGGGGGGGGGTTTTTTTTRRRSSQQQVVVVVVVRRRRJJJJJJKWWWWWLLLLLLLLLTTTAZZZZZZAXXXXXXXOOOOIXIIIIIII
PGGPPPPFFFLLGGGGGGGGGGGGQAAAASSSSSSSSSNNCCCCCCUUUUUUUGGGGGGGGTTTTTTTTTRTTTMQQVVVVVVVRRRRJJJJJMKKKWLLLLLLLLLLLAAAAZZZZZZAXXXXXXXXXXIIIIIIIIII
PPGPPPPPFLLLLLGGGGGGGGGGCCCCASSSSSSSSSNCCCCECCUUUUUUGGGGGGGGGTTTTTTTTTTTTTTVVVVVVVVRRRRRJRJJJJKKKKLLLLLLLLLAAAAAAZZZZZZAXXXXXXXXXXIIIIIIIIII
PPPPPPPPFLLLLLSSGGGGGGGWCCCCCSSSSSSSSSNNCNCCCCCUUUGGGGGGGGGGGGTTTTTTTTTTTTTTVVVVVVRRRRRRRJJJRKKKKKLLLLLLLLLAAAAAAZZZZZZAXXXXXXXXXIIIIIIIIIII
PPPPPPPPPPPPLPPSWWGGWWWWCCCCSSVSSSUUUNNNNNNNCCCCCGGCGGGGGGGGGGTJTTTTTTTTTTTTCCVVRRRRRTTRRRJJJKKKKKLLLLLLLLLAAAAAAZZZZZZAXXXKXXXXXXIIIIIIIIII
PPPVVPPVPPPPPPPPPWGGGGWWCZCSSSSSSSUUUUUNNNNNCNNNNGGGGGGGGGGGJTTJJJTTTTTTTTTTTCCVRRRTTTTTTTOOJKKKKKKLLLLLLLAAAAAJJJJJJTJXXXXKKKKXIIIIIIIIIIII
PPPVVVVVPPPPPPPPPWGWWWWZZZZGGSSSUUUUUUUUNNNNNRRRNNGGGGGGGGGGJJJJJJJJJJTTTTTTTTMMRRTTTTTTTTOKJKKKKKKKKKLLLAAAAAAJJJJJJJJJXXXKKKKHINNIIIIIIIII
PPPVVVVVVVVPPPPPPWWWWIIIGGGGGSSUUUUUUUUUUNTTNTRRRGGGGAGGGGJJJJJJJJJJJTTTTMMMMMMMRRRTTTTTTTKKKKKKKKKKKKKLLLAAJJAJJJJJJJJJJJKKKKKKNNNIIIIIIIII
SPPVVVVVVVPPPPPPPWWIIIIIGGGGGGGGUUUUUUUUUNTTTTCTRGRGGAGZJGJJJJJJJJJJJJTTMMMMMMMMRRRRTTTTTTTKKKKKKKKKKKKLLAAAJAAJJJJJJJJJJJKKKKKKKNIIIIIIIICC
SPSVVVVVVVPPPPPPRWWIEIIIIGGGGGGGUUUUUUUUUTTTTTTTRRRRRJGJJJJCJJJCCJCJJJJHMMMMMMMRRRRRTTTTTTTJKKKKKKKKKKKKLAAJJJJJJJJJJJJJJKKKKQKNNNIIIIIIICCC
SSSSSSVVVVPPPPPPPPWIIIIIGGGGGGGFUUUUUUUTUTTTTTTTTRRRRJJJJJJCCJCCCCCCCCJJJBMMMMMRRRRRTTTTTTTJKKKKKKKKKKKAAAAJJJJJJJJJJJJJJKKKKKKNNNIIIIPIIICC
SSSSSVVVVPPPPPPPPPPIIIIIGIGGFFFFFFEUUUBBBBBBBBTTRRRRRRRRJJJCCCCCCCCCCJJJZZMMZZVZZZZTTTTTTTTJKKJKKKKKGKKAAJJJJJJJJJJJJJJJKKKKKKKKKNIIIIPIICCC
SSSSSVVVVPPMPLLPPPLIIIIIIIGGFFFFFFTTTTBBBBBBBBTRRRRRRRRRJJCCCCCCCCCCCCCJZZZZZZZZZWWTTTTTTWJJJJJKKKKKGKKKGGGJJQJQJJJJJJJDKKKKKKKKKNIIIYCCCCCC
SSSSSVVVPPMMMLLLPPPIIIIIIXXFFFFFFFTTTTBBBBBBBBTTXXRRRRRCCCCCCCCCCCCCCCJZZZZZZZZZZZWWWWTWWWWJJJJJJKKKGGKKGGGJGQQQQBNJJJJKKKKKKKKKKKIIYYYYCCCC
SSSSSVBMMMMMMLLLPCCIIIIIIXXXFFFFFFTTTTBBBBBBBBTXXXXXRRRRCCCCCCCCCCCCCCZZZZZZZZZZZZZZWWWWWNNJJJJJKKKKXGGGGGGGGQQQBBBBBBBKKKKKKKKKKKKKYYYYYCCC
SSSSSVVMMOMMMMMLMCCIIIIIIXSFFFFFFTTTTTBBBBBBBBXXXXXXXTRRRBZCCCCCCCCCCZZZZZZZZZZZZZZHPPPWWNNJJJJJNKNNGGGGGGGGQQQQBBBBBBBBKKKKKKKKKKKDAYYYYAAK
SSSSSVCMMMZZZZZZZZCICXIXXXXXXFFFFTTTTTBBBBBBBBXXXXTXTTTRRBBCCCCCCCCCCCCCZZZZZZZZZZZHPPPWNNNJBJJNNNNNGGGGGGGGGQQQBBBBBBBBBKKKKKKKKKKAAAAYYAAK
SSSFFFMMMMZZZZZZZZCCCXXXXXXXXFFFFTTJTTBBBBBBBBXXXTTTTTBBBBCCCCCCCCCCCCCCZZZZZZZPPPPPPYPPPNNNNJJNNNNNGGGGGGGGGGQQQBBBBBBBBBBBBCBBAAAAAAAYYAAK
SSSFFFFMMMZZZZZZZZCCCZZZZZZZZZFFFFTTYTYTTXXXXXXXTTTTTTTBBBBCCCCCCCCCCCCCZZNNNNNNNNNPPPPPNNNNNJJJNNNGFGGGGGGGGGGQBBBBBBBBBBBBBBBZZAAAAAAAAAAA
NNSSMMMMMMZZZZZZZZZZZZZZZZZZZZFFFFUUYYYTTXXXXXXXTTTTTTTBBBBBCCCCCCCCCCCCZZNNNNNNNNNNNNNNPPNNNNNNNNNGGGGGGGCGGGGQBBBBBBBBBBBBBBBZZQQAAAAAAATT
NNNNBMMMMMZZZZZZZZZZZZZZZZZZZZUUUFUUUUOTTXOOOXXTTTTTTTBBBBBCCCCCCCCCCCZZZZNNNNNNNNNNNNNNPNNNNNNNNNNGGGGGGCCCGGGQQLBBBBBBBBBBBBBZZQQAXAAAAAAA
NNNBBMXMMMZZZZZZZZZZZZCCCCUUUUUUUEUUUUOOOOOOXXXTTTTTTTTGBBBBFFCCSSSSCCUZZZNNNNNNNNNNNNNNPNNNNNNNNNNNGGCRGGCGGGQQQLLBBBBBBBBBBBZZZQQQAAAAAAGG
BBNNBBXXMMDMMZZZZZZZZZCCCCUUUUUUUUUUUUOOOOOOTTTTTTTTTBBBBBBBBFCCSSSSSCZZZZNNNNNNNNNNNNNNEEENNNNNNNNNNNCCCCCCCLLLLLLLBBBBBBBBBBZZZQQQQQQAALLG
BBBBBBXXXMDMMZZZZZZZZZCCCCUUUUUUUUUUUOOOOOOOTTTTTTTTTBTBTTTFFFFFVSSSSSZZZZNNNNNNNNNNNNNNCEENNEEEENNNNCCCCCCCCLLLLLLLLLBBBBBBBBZZZQQQQQQQQLLG
BBBBBBBDDDDDDZZZZZZZZZCCCCUUUUUUUUUUUOOOOOOOTTTTTTTTTTTTTTTTFFFFVSSSSSSSQQNNNNNNNNNNNNNNCEEEDEEENNNZNNCCCCCCCCLLLLLLLLBBBBBZZZZZZQQQQQQLQLLL
BBBBBDDDODDDIZZZZZZZZZCCCCCUUUUUUUUUUOOOOOOTTTTTTTTTTTTTTTFFFFFFVVVVVQQQQQNNNQCNNNNNNNNNEEEEEEEENNNZZNCCCCCCCCCCLLLLLLBBBBBZZZZZUUQQQQQLLLLL
BBBBBBBDDDTSISSZZZZZZCCCCCUUUUUUUUUUUUOOOOOTTTTTTTTTWTWTTTFFFFFFVVVVVGQQQQNNNQQNNNNNNNNNEEEEEEEENNZZZZCCCCCCCCCCLLLLLLLBBBBZUZUUUUUQQQNLLLLL
BBBBBBBDDDDSSSSZZZZZZCCCCCUUUUUUUUUUUUOOOOOMMMMTTTTSWWWWTTFFFFFFFVVVVVQQQQNNNQQNNNNNNNNNEEEEEEEEZZZZCCCCCCCCCCCCLLLLLLUUBUUUUUUUUUUFQQQQLLLL
BBBBBBBBDDDSSSCZZZZZZCCCCCVRRUUUUUUUUMMMOOOMMMMTTTWSWWFFFFFFFFFFFVVVVVQQQQNNNQQQQCCEEEEEEEEEEEEEEZZZCCCCCCCCCCCCCLLLLLUUUUUUUUUUUUFFQFFLLLOO
YBBBBBBBYDYSSSSZZZCCCCCCCRRRRRUUUUUUUMMMMMMMMMMMMFWWWWFWWFWFWWFFVVVVVVVQQQQQQQQQQQCCCCEEEEEEEEEEEZZZCCCCCCCCCCCCCLLLLLUUUUUUUUUUUUFFFFFFFZZO
YYBBBBBBYYYYSSSZZZRCACCCCRRRRRUUUUUUUMMMMMMMMMMMMFWWWWWWWWWWWWFFFVVVVVVQQQQQQQQQQQQCCCCCCCEEEEEEEZZZCCVCCCCCCCCCCCLLUUCUUUUUUUUUUUFFFFFFFZZZ
YYBBBBYBYYYSSSSSSRRCACCRRRRRRRUUUUUUMMMMMMMMMMMMMFFFWWWWWWWWWWFFVVVVVVVMQQQQQQQQQQQCCCCCCCEEEEEEEZZZCZVVVCCVVCCVVOOLUUCUUUUUUUUUUUFFFFFFFZZZ
YYYBYYYYYYYYSSSRSRRRRRRRRRRRRRUWZZZMMMMMMMMMMMMMMFFFWWWWWWWWWFFFVVVRRRMMQQQQQQQQQQCCCDCCDCEEEEEZZZZZZZZVVVVEVVVVVCCCUCCCUUUUUUUUFFFFZFFFZZZZ
YYYYYYSSYYYYSSRRRRRRRRRRJRRJRRRRRZZMMMMMMMMMMMMMMFFFFWWWWWWWWWFFFRRRRRRRGQQQQQQQQQQCCDDDDDDEEEEZZZZZZZVVVVVVVVVVCCCCUCCUUUUUUUUUFFFFZZZFZZZZ
YYYSSWSSYYYYSSRRRRRRRRJJJPJJRRZZZZZZZZMMMMMMMMMQMFFFFWWWWWWWWFFFRRRRRREEQQQQQQQQQQQDDDDDDDDDEZZZZZZZZZVVVVVVVVVICCCCUCCCUUUUUUBBBFZZZZZZZZZZ
YYYYSSSSSSSSSSRRRRRRRRDJJJJJJZZZZZZZZZMMMMMMMMMMMMMMFFFWWWWWWFFFRRRRRRREQQQQPPQQQQQQDDDDDDDDZZZZZZZZZZZVVVVVVVVIICCCCCCSUUUUUUUUZZZZZZZZZZZZ
YYYYSSSSSSSSSSSRRRWRRRDJJJJJJZZZZZZZZZZZZMMMMMMKOFFFFFFFWWWWFFRRRRRRRRPPPQQQPPPQQQQQDDDDDDDHZZZZZZZZZVVVVVVVVIIIICSSSUSSSSUSUUUZZZZZZZZZZZZZ
YYYYSSSSSCCQQQSSSSWWRYJJJJJJHZZZZZZZZZZZZMMMMMMKOFFFFFFFFWWWFRRRRRRRRRRRPPQPPPPPQQDDDDDDDDHHHZZZZZZZZVVVVVVVVVVIISSSSSSSSSSSSZRRZZZZZZZZZZZZ
YYYYSSSSSQCQQQSSZZZZJJJJJJJJJSZZZZZZZZZZZMMMMQQOOOOOFFFFFFFFRRRRRRRRRRRRPPPPPPPPPQDDDDDDDDDDHWMMZZZZZVVVVVVVVVIIISSSSSSSSSSSSZZZZZZZZZZZZZZZ
YYYYYSSSSQQQQQZZZZZZMJJCJJJJJJJZZZZZZZZZZMMRMQQQQOOOOOOFFFFRRRRRRRRRRRRRPPPPPPPPTWDDDWNNDWWWWWMMZZZZZVVVVVVVVVIIIISSSSSSSSSSSSJZZZZZZZZZZZZZ
YYYYYYSYSQQQQQQZZZZZZZCCZJJJJZZZZZZZZZZZZZZRROOOOOOOOOFFFRRRRRRRRRRRRRRRPPPPPPPTTWWWWWWWWWWWWMMMMMZZSHHHVVVVIIIIIIIISSSSSSSSSSSZZZZZZZZZZZZZ
YYYYYYYYYYQQQQQQZZZZZZZZZBJJJZZZZZZZZZZZAZZZROODOOOOOOOOFFRRRRRRRRRRRPRRRRPPPPPTWYWWWWWWWWWWWWWMMMMZZHHHVHHVIIIIIIISSSSSSSSSHHHSEZZZZZZZZZZZ
YYYYYYQQQQQQQQQQQZZZZDZZDDDCZZZZZZZZZZZZAZRRROOOOOOOOOOOFFFFRRRRRRRRRPRPPPPPPPTTWWWWWWWWWWWWWWEEEEMMZZHHHHHHIIIIIISSSSSSSSSSHSSSEZZZZZEEZZZZ
YYYYYYYQQQQQQQQZZZZZDDDDDDDDZZZZZZZZZZZZZZROROOOOOOOOOOSFFFFFFRRRRRPPPPPPPPPPTTWWWWWWWWWWWWWWWWEEEMMZHHHHHHHIIIIIISSSSSSSSSSSSSSEEEEZEEEZZZZ
YYYYYYYYYQQMQQYRRZZDDDDDDDDDZZZZZZZZRRRRRRROOOOOOOOOOOOSFFFFFFPRRRRRPPPPPPPPPTWWWWWWWWWWWWWWWWWEEMMMMHHHHHHIIIIIIISSSSSSSSSSSSSSEEEZZEEEEEZE
YYYYYYYYYYYQQQYRRZZDDDDDDDDDMZZZZOZRRRRRROOOOOOOOOOOOOOFFFFFFPPPPRRPPPPPPPPPPTWWWWWWWWWWWWWWWMMEMMHHHHHHHHHIIIIIISSSSSSSSSSSSSSSEEEEEEEEEEEE
YYYYYYYYYYYYYYYYYYYDDDDDDDDDMZZZZZRRRRRRROOOOOOOOOOOOOEEEFFFFPPPPPPPPPPPPPPPPWWWWWWWWWWWWWWWWMMMMMMHHHHHHHHIIIIIISSSSSSSSSSSSSSEEEEEEEEEEEEE
YYYYYYYYYYYYYYYYYYYCDDDDDDDDZZZZZZRRRRRRRRROOOOOOOOOOOEEEEFPPPPPPPPPPPPPPPPPWWWWWWWWWWWWWWMMMMMMMMMHHHHHHHIIIIIIISSSSSSSSSSSGSSSEEEEEEEEEEEE`;
export default input;
