const artists: {
    idArtist: string;
    name: string;
    description: string;
    image: string;
    like: number;
}[] = [
    {
        idArtist: 'AR-ASKFAZN',
        name: 'Taylor Swift',
        description: 'Today I would like to describe a person who does very well at work, and that is no other than Ms. My Tam, a very famous singer in Vietnam. Of all the celebrities, My Tam has always been beacon of light not just for her fame but also for her great passion for the work that she has committed to',
        image: 'https://imageio.forbes.com/specials-images/imageserve/c9943b37571e484aa953467cdf2bfb9c/0x0.jpg?format=jpg&width=1200&fit=bounds',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    },
    {
        idArtist: 'AR-ASKFAZL',
        name: 'Maroon 5',
        description: `Maroon 5 là một ban nhạc pop rock người Mỹ đến từ Los Angeles, California.[1][2][3] Nổi tiếng từ năm 2004 sau single "This Love", sự nghiệp của Maroon 5 liên tục có những bước tiến vững chắc. Dù từng phải thay đổi thành viên (tay trống Ryan Dusick rời nhóm vào năm 2006) song Maroon 5 vẫn tiếp tục thành công nhờ sự định hướng của Jesse Carmicheal, Adam Levine và James Valentine.
        Maroon 5 từng giành được 3 giải Grammy cùng với 5 lần đề cử khác. Họ là một trong những nhóm nhạc thành công nhất của Mỹ trong thập niên đầu tiên của thế kỷ 21. Kể từ năm 2002, ban nhạc đã bán được 10 triệu album trên nước Mỹ và 15 triệu trên toàn thế giới.`,
        image: 'https://static2.yan.vn/YanNews/2167221/201801/20180118-095403-mi0002988920.jpg',
        like: 0
    }
]

export {artists};