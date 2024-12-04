const quiz = {
    nome: "Você é noob ou pro no minecraft?",
    desc: "Teste para saber se você é iniciante ou avançado no minecraft",
    quest: [
        {
            id: "quest0",
            tipo: "1",
            limite: 1,
            enun: "Na primeira noite, o que você faz?",
            alt: [
                {
                    quest: "você constroi uma casa",
                    resp: "intermediario",
                    marcado: false,
                    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFRUXGR0aGBcYGB0ZGhsaGhgXGBsYHxsaHSggGB0lHRsaIjEhJSkrLi4uGR8zODMtNygtLisBCgoKDg0OGxAQGzAlICU1LS0tLjUtNS4tLzUvLS0tLS0tLy0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEEQAAECBAQDBQYDBgUEAwAAAAECEQADBCEFEjFBUWFxIoGRofAGEzKxwdEjQuEUFSRScvFigpKisjM0Q8IHVGP/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADIRAAEEAQMBBgQGAgMAAAAAAAEAAgMRIQQSMUEFEyJRYXEygZGhFEKxwdHwBvEzkuH/2gAMAwEAAhEDEQA/ACq/A6iawdI6k/aKJfs7Vp0UP9RH0jq3BqtSs7juWXiqTiVRI+Ikt8TuWHU6aRQJqgQpXVX1Ps/VFRXmT/qI+kVIoKwWSVkjXtdeJh7Te0IWgKADnbWJftE+Z8KVN4CA3uGCi2hIff1ssjM4v+Yov4wyrp0zISopQOJP0S8eYj7PTZl5kwJA5P5kgRcrA0KlgLmkpA1SUh2HUxZLTRVCwsfiFH7syyJiZgU7FLhmOl4a4fQyVSlKMxYOiksBzseESr8LlTAlFNMDyyoqCyd207Lawdg9ZTSWkzZeaZfMsMUnUjXgLaQwuJGElrKffRLMPkyFpUk5xlLjtC/+3lEZUokqPulkpHYLK2YDkY0uH+0khSlJTJCcuhtdi3CKEe1swzCkSklN2ICidPvFbnWcJlBIqKQX7dMovqcsz78Y6RIUkkqp2Ae5SsebjaNFhuO1SwoKlFx8LSyOPG3CF1SqvIV70LyF9W3fv0JiFxz/AChcKbYQwl3LU6cqiAOyd9GJ1LvEkYTUFBy09ybFkh0+O8eTFzyEm+UZcujP2W+afGGKjiJQjIFgJ0IKQ6dt72bWBa518hCw3yhafDKkJUn9mFxY5EWPGLhhFaUpAlhJB17A6aReZmImWoHMHZlFSB5gxVXprQhClzcrPf3tyXt8JbgLxZfWSQmfVEDBK0rKnABDNmLaNoA0dTYDNyLlrqJd9e1mI42OkJp+IzveFaVG5Lh9g4dnv9oFk4ghJzhRKiwUTpd819tN9XjGNa04H6KWE3/dFPlIVVv7tyQEnkD1i5EukQr3n7RMJWCHCbDQGxEUYRT0yworJFu2kqIuS4u2ttOcE0wolHL7rQ/mWqw1Js/SNAnaQCSc/wB/VVYS5VGjMtEqaSpLkOjVtnf6QvXh00knLrzH3jeS6enQhM1MpKSrds5D8bjgb8oCqKiUtYylL6Ha9y7Odo2wuZfjx8wgca4WQRhE3gP9Q+kT/cswbpPf9xGvEpwCGv3fSCEoQEspDni/6PGzu2VgWlhxWEVh01P5X6Mf1j2SmZopOXmUkfpG4m1ACR2UgDi1vADzeFtTNSXVllnkFX8Aq3hGeVjQDZA9yrJWWWZgLZQz3OW3W8TrJpQAXAHEgN0givxNpiUJSlKWf4XLv/Mq4i4SzO7DpIZ2JbjwDvfp5Rz3zAVhS0Z7JYMapajNWpMoAAFDOVLLJAcdT0EZ/FJKnPuz7wJUQH3AJAUwO8bigQKSWpCSR7iWZk1RL/xM9OSXLffIglxzjGzJKwXSzcBa8KfNlPli7vaDyRf14+2fmgU++SAMiSk6sD94vXSJUQXCdmDaxMVZT8QZoXqrX7QlEd76wO5xyAk4TX3I2APziC5KLuCOX94AlY2kBlZgdNNIsGLgnspWoAagD6xAZR5qZV0yk3D+X3imVKCiwJ8APN4jKxeW7MpydCP1i8z0hVrvwhoneBRCuyERVSAnKJicrhxcXGjuDAiqROyw0X1JTbOOmukeICWtp1ihqKGLVWvpYTAWJqRLTm92lTuL8kqVw5N3wWuclPxKAfRy0L8arEZAHB7STrs7HyJgDdYWo8JJX44UKCUIQgFy6bHUp4dDFMuvXmcFR31J0Vm3/piibXDTKCbXa+oJ+ZgikmAkcwR0dIG3NZgDeEizaaVWGVM5JBIS/wDMX8hHuHeyi0IKFTrG9kts25jQ/tICUqNgQDqNw/q0JanGlH4GA8SO8n5Rvg08sgxgJjntC8pfZaRLU+eYSR3bcBBE3B6OWXWlAV/iN/O/lGcqKlSle8K1OIhKVncllHiS1/rG8dndXOP6JJm6AJ8iopUrHu5aeZEkn/c4glWNJS4CVcmSw+VvExnElYUPhAPMfeCRTvdUzuAJ84b+DhHItV3jlWZxUolpgP8AVlH+wCITh+Ypzf1TFnu1ES92m5zEd2vnaK5y0AM7nwinv0sXIHtSWSSrqav92OzKlNwLk7cTyjqj2kWFWCHcgskAhhr8vGFVXiiJKSVG2zBzGSTi/wCJnCgQ9gTtwjkazWCQVA2vWkTLW1GOTiCkqID3ax1ALxTPnT5wyIEyYprAAqte7bX3O8ZmlrSVkggnrswEP8Dx2fImFScmVQZSVXdrjQ2u0caSSQu8ZTBXVLauqyIXLU4UAXDFwzguNiL6xnqmdUIUXl2HnfiPi7odVtfMUZq5gdcwklVr5nBFtr6chE/2lOS4cm+17aX7u+LaRHwLtNcGtNcpXT47OCigIIzFlJfxd9GjTUhIYBirdjob200dzpwjIyqOYlXvHJUrNmfcKDEMRreGuGTMjqIbi+/O8TUU4DamSMiZbd1u6Vketn0+a0GIYmpjmWSSx1J2seR0gM4iUXfKdyNT6eAlLUolgzuXPfYRJEoC+539afrCmxnkoo9K52TgLXUGPKcKUlw3wmzt9YrVj6/elTBO4Ry4W5bwrKXyqzMANILq6KUlilWdx2rXB8Y29+4jLisJwaXlTXKmKJUbKOnCITlAKHHW9vlp/aAJ5SC4BSNCD5ty5RTilesJVKQm0wBJLOddBx2tEA3Oq1SZTlPfKCe6GWAfhpmVc1AKZZyyZbfHOLZEhtW1PdGewjAlrmol0009vKC4BY6qUbWSB1742WGET6h5CDNpqBP4YH/mnmwWWtdTqfYJBs8WG0cG/L++i6Gh0wkcZH/AwW718h7k4+6j7QTEy5SaM/iTM3vZ8zR5yrnTUsTyFhtGcWtgzcv1hxOo5UkqmV1SDMUSTKkstbkkl1E5UlybXgSV7VhCwKKiRmexW82aeY4PyEKf8XiNenK0Rdl63WuMobg5s4CAn0RmdkhTs9gXI6M/fB2Hey9UR2ZMxt86cj96yIbzqrGZwzTJkukQRqsplfN5kKp+HSVH+JxNU07pQiZMf/MtQT5QXArNetD9UZ7Kgi/59Q0egtx+yrHsfPSpRJkAk6KnIB5D4iLRSj2Fq3JSEKBL9mZLLcvii2VKw5JKQK1Tan8FCfIEwXJXQpLp/bUEfyrlq8lpvDO8rn9f/Ep8Gg4bMf8Arj9VnK32Tm06gqeFoc2OXsk6tmFo4TgFEa/4o3lNVomoMlExFQhTE089CZE1TX7E2WQgr6jvjOe1OFJpppQl1ApCkpV8QBFkqbQg28DEkcSL5CxTwhtFrg4en8GikqKjZ+piK0LJdJDdf0hVVYjLYshQPVgbt6tEZWNsG93/ALv0ghE/kBJ2lamvwisqFPkYPYqLQXJ9m6kpAWpCQA2pP0tDepx/+RD9S/kA0KqysmzfjUw6faO3FoJCPGQB9VbpW9FfLwynldqbNzn+UX48LecXfvyWj/oyR/Uq58BbYavCNOWz30jwr8P7frG2PQQs5F+6SZT0TeZOMx1qID6lt9OLRVIlhVwSz8G+0QpFOP0dot03Pf8A3h91gIS5Rq5aWLmK6AAP8/7wRmGu3rlFMqYL6NAl9NyqRjBtvGPJtSlIcu3FiB4m0DmoSC2p6WEU1lRZgco4jvGm0c6fXwsB8efqrAKhU1wO4A66x5tc+NjFeGYekqAVMUoOxUrtFjckDgBqecUYnOEsqTnC7OlQZi99LtdxePOT6l0hsZTA1LPaQIMlRTe4v/mG32jHZB6eH+ITR7kh/tqPttCEgw7Tk7TZ6rZCBtUTLHoxJJUPhUoeMBTZqgbH5RJE9XKNJajpp6I3367dt+v6wRKxOckWIPcPpC4VRGoi2UvMHble8AY2nkKu7YU/wrEZiyoZUiwL3G/MkCGcunu5JJI3D8naE3s+2ZTtp9fIxOmq5i6soJ7KczJFrgWPMxkdEA47cLTBFHGAQOUwGIpM73SQczFyLAMHa+vygCjJNXNzElgQAdBdJYcIlT0ahVrmFsl7/wCUDSPMNH8VO7/mn6RBtANeScHF1e61EyclKMw28TEpFWFDg/r10hHiMqosUZSngQC7QIcTqpbBUpJHJJD2zWIPCFCLcMEfVcbaSVq5inAGvWKpstwwsdjZ+54zKPas6GWL75reYjW+yE5MxU6cMk6dIl55MkKcKUCyllOqsjgtvEEEgNHCtkRe8M88K3ED+76cyQf4uePxDoZMo/8Aj5LXqeA7jCqhxueJKaWQoS0qJKyCEZ1H+ZRNgAANQOIhbU1a5pUpaipSjmWonUncnbpBtJ7O1U7/AKVMshhcAsebqLP3wJe5zvCvp2k7P02i0wikrzJPF+ea46D91o8I9naBJBrK2XMXtKlKJS/BUxIJ8GbnDeaipSCKBVKmWH/Cp3TOUw3UsZlnoQeUZmR/8fVytZQT1I+kM8O9l1UU1E+oqEJlyznWlKwFEIdSUgO6iVBIZt4ezcMbK9eq43asemmYS/V2R0xXyAWVqKpc11kKKgWdTk8wXvaJSZofckDXpy9awKrF1zZ0yYoBAWpSyNhmUVEc7mPKtYCSpJNzd7u+ndCnc0vDJhTVeZn8vGK5dWSWSHbXxYD1wivDHKSRq9t7beYiionLK2CSAOWp425wIA3EKLqqqUFFgQOY9WgyRUFXaKnJ7zt+kDzJcxV8wHrpAy5K0FgQSeYBvraD8LhSiuq8GC1lZUWOw22isYLJGqj84IokzGYuHs/cb26RNNIR+bnpBiZ4xuRWU/XN4CIHNqWA6xVnbhEffPqfOPbNIPBSLVSiAriXjlDqYkvxj1c8+vTQRKFXyiw0tFvvBuPKBMwSAVEAdODE3PKPJc9JD3AZ/q1hHNm7RgjdTnIg0owqOodvC0C1k3KgkcePj8/KBMbxBLAy+wGSGcl1AnMoOeyGOnLi8B0VWQhydTvrv6aOHq+05JmkMHh+5RtaEXT1yg5Xqk35Pf6iFYqlGYovsWfxa0RmTmQqajKoFbEXKg7uWawYa84rn1qT2RcfbMH6sfGOc1tklNLS3lX1OIKJ7L8dT1O9oWT6lg7uXtBKkqmMiWlSlH8qQVEs+gA4bQqnkpJBBSRrmBBHJjoeUaI4x0CjWl3C9nTOyX7oCSbx478zHiTeNTW7QtcbdoyhqsdqLaVDxXXHtRfhl1WDsHLeuJg3Hw2jFblcadOQndoophY9evCGKpf4ZcHQwvkDUNf+0JicSDaCPk2nXs6O2r+n5EcI8oT/ABkzTVXyj32dDrV/Tx5h4lQH+NXrqr5QD+Xey2NGG+6fpQAdQ5HG55f2hPhl6mf3/wDJIiyS5q1OTZJDcLA6P6eK8L/7ie3E/wDKENFA+yc7ke6fUkjstmKjfQaG7s2v6QHXTEo7BGYnjx9fOAcLxuokdmySbgFDuln1va504Q7X7UKXImKmZcydMoPiX0+sILHNNnK5YgBbe7KW1OFiYgFQYnUhnDkG/PV4FwzDzImiZLWUrQTlU+Vi5Finlr0I3iFNjyO0FlQc7h+EW4dMkKWCqecgJJABzdLhh1hodK0EG0oNccBaCv8AabEwT7lUhCi5MxMmX71QAGpKSDvoHhJMqsVmHNMrZ7s7e+UBf/AlkjqBtD6np6Vanlz1KP8AKbkt1AhdIqlqSeb34F9eXF4r8VKBSZIHtrcs1iuIVKQpE6cVuDrckWu/N+MJpNSpOi1DoSI1QTSzD2pqFKAa6m06wev2PCgFJSWIBDXcHTfeHt1MbBTm/ZLGeAsb+3r/AJyet4ulYrMFuyeqYe1HsmBxBbcNAkz2dSCAVpB4EsfOD/EQO/0pbeoRWCVpZHa1uX3d9On0hTMxycFqCVuMxZ0g2e20OqfBSkfHZmtwaBThkiUoKU5IuHsHFx94U18O4mr+SAEdUlqMSmlZVnUk20JA0G0VVU5ayCsqUWsS+msan9olqQ6gDzAfUM3hA5rRmAysgWAazQ5s46M4V7h5K72XDSwSHzH5FvXWDp885iySeYEKxV5SWBA+VwT8oYidOVdA7O19XDvGV9l5d5oDlGU+dgPHrpF4J/WKl3AJI7tNTHgUXZ3EENRIPhcR80NIjNFVVOyJKmu1vl945y1r+UIPaBc4AEnKHa2nG8SJ7yaDq+asNs0vKrFHT2rXNjzH2idPUhaQ0xL6tu3SECqhSmBYiL8JAE1NuMPdANq0MgJWhp6lBLEZgA4JuM3AjhaLpNQlbghwNAxewIHAsxbuhJi1QEMkG72bqdttoBp62YlThepu/A9YT+GtthFJBsNMWwnTkpBynKMuUE8HVbmwJEZur292CrW7cGe3ePGC6uZlJUo5muAdNNIAVXuovofNw2nT5QMMRblA6DuzbuStN7B4hUUs0zAhOVbJXncFswJykXGnTq0KfaUVE+omT5wSn3irlJ7IGwaxO3zhJLqZiT2Zih3n+0PKdCpwBWt+ykq5PYFmvfprDXd4x26xXsmBrwScAIWRISkaNd3NzqTfizlLxGrRqEC7WbXQjfk3hDmmkJWkKLiyATtcAE8+1eKZmE3cbAAFywJLZiQLdqzXsYSJRuylA2UvwlHul5wJayQQQpOcbEFL6W49GhlKw0k5lEJJBNmYlwCx2fsq+UTl5CkzCwDkkuwZ7HS428IHmYgVEFxYjTRhYeTDugSXPcSFTnm7V1Xh6ghTtYKLsbkbC2rsQ7bwnrMPmqUBkItuLam3PfSNHOqOyU7kNoDs33iyZNyoTmuS4bfcNcWveAZM5nRRryMpLgVDMStWdLdnfZmPeddL2irDg1ZM/wA30hxTTiTxtc99nfr84UYaP4yZ/m+kaGvLg4nyXRgcXNaT5oqmH8UvofkOUVYOfx5/9X/sYupB/Ervsf8A1+0U4UPxanqfmr7RXQ+wWojI+a7HqsKKQLuntBg4ObUHoIIweeACcjXuDo+mnUxmJU8Aasdr84ZIrCmSohXaKrWHK8DJAduwLkFh3UnWL4UmcU5GQli5ADghyw65gT3awnnYSqnIJX8WjBnFyemgtzitOOzLOyiC97eUWVmJe+ygpYJHHlccgCDEY2Zg2nhGQ8BE4WtbuDcpI2c6DrvA1Ngk4KZ+z2nyl2spgRu7bPE8JWlKiq7AOd9DysIPONhagRMSBzcev7wJfI1x2hAHOPKzVbhK5JBmEFyNHLu7kcg27axopPtPNBYTl9FDN99mhjV+7XLUtRSsAEgAgtrpeMs5BDp2332eGNl70eIZCtszm8Jn7R1lQuYiYgzGyB1AsCoBSlFnsw+UZavqVTFOslRYXMblE+UqWZK1J5hR4731sYHm4bTgaDuvFQ6gMwWqnSXkjKX+zVIhH4lSmZkUDkSkkO7MosRYB97w8raSgnIUErnOASlJUo3AP8ziwBJvCzEJoJQA6UpfKkGzN89IBpq0OoqfKElwL201PF4suc8782mNkYBlqS4fLzrSnRzf5+PDrD+pwfIgqRMLjXtW4PyD3gL9rlBQUgKSxs4+zxdKxJIBBU4III01h8jnkgtx6JBJ8kul4tPSoArLOHCgNH5iGf79QScxOvDaPJE5ExRz6AOAG10+rwcmhp7nIm5fX9C0DI6P8za9kOCm0og2Ct+7bfrF1uMKqSmIBzGGCAAHUWHp4wPFHBQK5Jhd7QoeSbaEHzA+sHCelvi4d8KMUxALQpAFiNfOLiDt4KJuHBZsmLaaYUrCuBikG8clV/7R2Ct4XleSVOX1fueJk+vGCZiBdh61gb1vFAq3No2jsXn5gAHsNe7aEsknjDWYl0jpC1ScpYRGUBSqVu42UVFkqpyly+jcmMUp0eJetohAOCqc2xSY0+IsjLmYPa3Rw/UQ0m1TodK06bMSN/tGaUjYhn42jwSxGd0DXZCQYD5ptidZmBSAEpYsBtu3R4UmVwceEclJG5YRL1tDo2BgoImR0KK1NMgBCTxRqd7aNeCFTSsDKbaE+OkUUaXRLPBIPV218IHr8UEt0IYq05D9eXjGEx7nLY6FhIc7gdEwRlHZBDs7btpfvaE+Gp/jJg/q+jRV7PKUqcpSiVEpLl7n4YIw/wD72ZzzfJLQzbt3D0TQd233R9NL/iFnkT/x9d8L8KnATZ4O6m8VK+0GrqMk2YQ3h0hZhVL+Ita7hSnCRvcm54QMLC8EeybMdpCL9o8IBCBIkqmFT9pLEhms2t/oYHwb2aXMR2kKSDcFQyklyNDtzjW01SQhSkpACQ6lE2SNBYM/IO5Y8zHsjF1rS4nU5U3wkLQR0LKSfGN0fZ+qdBUdn15XPcI2mryspWeyS0aK84W1eEzZSSqxA1ePodOqbNVlSgLOnYmSz5ZgTpwiGLYIJqEonpmy0hTvlWBp/NlKd9Yz9xrI3AScdcZVbAR8QXzmkmzFJWAnUNw9WgdSVDVJ8I+jYXgVLJJUmaZhJsFKSWB2s1+Z8ILqKKQRok9BASyvjf4Y7CsMc0YXy4LuLM3dBcuaCoMeXHv9cY3NXhskIURJzMknK2rDSMNQYYpU5IVJmdouE5FJDPsdAB9IkcglBJBFeaW9jichU4hNeYstZ+G2jwMia0fTJ+AS1bNAS/ZeVreEM7Ri21SrceKWMpyVC5UW72ENpWDqVnlpzXS4IDkt2tLalOV9n3gL2gpTTzOyAEH4b30u4h/7DKWfeLUk5SnKkm7u+nJx5wU8hEXet4QbbKxUyQsaiDsOlpyHMHUSQQRYW+r+Ubirw9Kw7MYTVWBL2Gvc8W3WteKOEJceFnKlYll0BPaF/k3SOTjZH5Ae8iGFR7PLUS6mIYB9DZR8bDxhbOwKYksVI8fla8aWPhcMnKqgVsyANSO+E2IrJUQ9uALxCpnFRc6QOuYBtGaOLblIU5pJ+l4hljwzAdIqmTztDw0qwl5VE3gSYogmLpa7CNdLa11piTYQKYlMnskbnaKJC3EABSa514TWnugcvXoQHVSgT0i2SvsdPl4wIud2iHhdGzSKRwDFMIa3DpBNNLcQOpZPAdLQbRaHkd/XpojidquLNL7ng5lLopQKEEZE2KQR8KTvHzr2nwWSiXMWlACgqzOABmGwsbRrsEq/4SSlGuQDvAb6Rj/a6pORScpIUAc3EPbKNxb4tI8rpO9/EmiQL/dODLPCw9QySG3tfrHetvRiSpBVEf7bR6xjrCQ8ZWkStqZw4IQ42ItxjK0xd41CS1KeUtQ5aHhGSkWfyhcX5kcp+FaD2dH4p/pPzBiEuqy1k0jm3gmBcIqGUpj+U8txwhxhGFAzDNX8R0B20uYogbzfUKw8Bo902o8GQspmHM6gCQSGJLNs4bcXvGnw/BEqdwgAXUtXwpHEnusBc+JFFFTsHJY7FvRMS9oEqmhKJKAlCb9pXaUo6rVs+1tNBG/RaZjnhr3bR5oZpXV4RlZr2gnIUQlCMiUhrKfMd1KLDMeFgwYCFcsAaQVXUM5L9hR4kDN/xeF3vCLG3IiPdwOiDA2OqHllcWTddlGftSkHsljxEepx2oSABMVlD22vr4vAPvujRy58GQHHKEOITmRj01TBaZawDpMSFBmZu09mg2nrpBbNKA7RcoWtJYl7BKgm23ZjOJWOMehcZ5NHp3/E0IxO8cFbinqKAv8AxE6Wf/0SiYnoQlleJj1VaEj8KfTzNGBzyj/pZQ84wK0XtHstx+Yxz39i6d3AIT26t46rcqn1H/13HGWUzHtsys3lFKapTspE1DlhmlrSL81JYxlJcxQ3L732jS+zVZNIWorIQ2VuO/l9Y5Wt/wAfgjiMhIx6J0ep3u27UFjfs6Z8z3ipqkMlmYHRyLbXMdhgFOgS0qK1E9pTZdWsBsI0MyYAC/U/aEtXTpJfxv63jy2tDWsEXRPle0cBGGs7IzavvuL/AGgaZXFtAFOEs/GBez2lZyrkRps/PWK5zLAYJDKBV0DnzvHOELQs29XzFhYylRfjwfUcrQP+zo0KhazkX8vVoh7hBJylSfk/p/KOkTiR2Ukgbs/PjDg2uEBKzjjj6D+EVLuT1isSuMEy0BnPrfzjq8JKikR6UAxYFp7vTR5mfTTygbUQU+QIAmoIOloehEWfuwkPYcjrDoy48C0xrj0WcKyQ149krYND2Zhah+Xwv8oBn0EHvrBFJgkN5VKajskQvUq8MkYceJaLhhUV3jGonSWgZM5hB9HUsDHhwmPZeFkbwD3sI5TI5qK0VH7WTJctEtICgjQFyHvqx56DgICnYguY5UBdzY7ngC8BS6BQc2gyRQTAQVoIT87XjCWRN491vZNfBVE6a+xvy+0Lz6vDqZWJRsPRjPmfGnT5vCXM7i1qqRINO1nKFJ7+0x6Qo/dAbXrBdDWfhJHX5wbhYSsjMN9Om8Jkc9hNIxsIFoGkwZYOZAPU3B8Y0NHTz0i6Ekd6T9bxoMOloZ3HHj084bZk6W09axhl1BfghC6FjuVlBWlI7UtYtqA48rnwi1GLJ0zgcldk+bRolUyTqN/lzgOdhSFPYfP13QDJdvFj2KUdMPykhCS6uwOvfHipyVfGAeoe0QnezqA+W39PZ8xAy8InJ+Fau9iPE3jWzWSt4d9QgMUo4Nrp+F0yv/GlP9LpfwaBJ/sxK/IpaSdrEeY+sTUmenVKFeKd+94j+3EfFLWOJDKHkXPhtHSh7a1TOt/P9jaQ6M/mYgley8wfDMSRu4I+8UTMGmj8hPS/kLw5l4ojQrbkoZS/+YCCpdVvY8GjpRf5LI34x9R/H8JJjiPmFkJ1MU2U46hopHjwjbqqBd994qnU8ldilPUBj5NHTi/ySF3I+/8ANIDp2nhyxqStSgkC6iABzNo3NJIEtCZYPwi54nc98DU2GSkK94kEG7XcDnf1eDHYXtv3Rn7R7QbqAA34RlaIIu7slU1k3Z+f2jPTJys/aWGFz0BFuZ5Q4mrcl9/XjCmpoQTmJtd791umvdHj3SCSQuPyS3v3G1bKWhVkhnDAvyb0YHpZSgpSlBuB2AL+ekRyCWnMFOLgWuHBI+Wseolqe51fMHvfMG4aDzEVVXSC0TNmnKSFEkaEC4Je3P8ASFkymm2YgsG2G54mLqWexyJLkh38Oz8oKWCdU38HYtEFsUSdGHKLW1D9ws3XWC52D5U9pk8yrXTbfWCZU4qLkeMXe7B1APWNceqDPibaoUFnplMPyuRzFonJplHRJ8I0SU+vLxi+nkKWSEjQPCjO55oBVVrOGQuWXYjnaLJVaoBmB8tHjay8MRcEBRDgk8g9uB03imdgMhT9lv6bWLAEPblG6NkrW80UwRuCzEusTuD3b3H0gafOzch6EN6/DZUp9bN8RPPhtCYmAmkl+F6pxdwURS0BPxWHnfQ3s32i2ZRhIJf/AFDk7/SB5U1QbKSGNvIxd7iZMPwknb7QBfEG1WVdtrhX0JlhrhzxDbsdXHfHlYqWLAAqO4s1uUFy/ZydlclIs7E3i1Hs8cwSos+9mfrFOe5rdu37ItxqqSRAJIyuTBU2jmG2bMdLE/XT7xraPBpSEslOYkfEeLkC2gIbjHldiMuX2UZUl7m1nv4gv4wRhjjZuk5V7QBZWCnYSsm6D4cecUj2YJBdQQos17F3eNIrFO2wY8XvcONfOBKysDgAhyWv1Pg9rRkE0l03CXvKFocFMtLlT8LceXKHEtKUB1gaafLrA0yUpQN9dvXOFk2RMe+YtpC8ym3FUXElaVJQzgs+ge+hiyXULBss24wup5dg4535wWB65mMxFJjZ3jgo1GJTBs7c4JTjDWUGtveFQVdn0v3aPHoVyuLtFUmt1jxyE8lYmgt2t/lF6Z4Onn4xmlM3159Y5AbQkd8TaE4atp5C05blp15xSumSdRe3X9IRComDRQ9c7wQnFFjUWt8MTb5JrZ2HgoydhKFFm1PUwvm+zqLEMOabF35QVKxdO4Oo9PBKK5JNi1+T/pBAvCYaKRKwman4Zi+hZT353EUr9+jVKVeKT9Y0aq5IA7XL1xgaZWhj2duu+54PBbz1CS6KLqEhmYkE2XLUltSGUPK/lBFLWpmB0qcaaEX7wIHxSqTwZ9OJ2+cdLKZaQmws567/ADhhw3GFkmY1g8JRMy4MIauVMdrkEvuYYTcTSE5klz8rj7x0mszhgAVaW8/KLZuZmlmSsz1oGmvEbNeI0lQq7ai/dbSHCp8sli55+GxgOcUoUWuQCWAG4J0bZgWMMDgcUooyAkOVEJUSdA5AJJv3KHgIsJULB1c/nFYqc72Gba1+Q6faKaWUpSXZKuZLc7euMQi+Vaa0sl1AOE8zDumpEBNgCLF1NwO/CEUSSsizkcR/aChlazltq2kBF1Jl2CA5Db259YMkYihmKSkbNe7M176l4DpaMq5Dj5NE14er8pB05ah7bQxpmHja3B9P6UQ3chTqq8qcJ7Kb9dvTRVKqVhmVpo5cMC+hgcK6ROUkmyQ8ZnSSOdd5Q2SVVWSPeKzLUft0HrWL8PoZIJzjQaEEv9oO/drJcqZTcLPrrvbwimdSZFAKUGfXfTVt4a5k7SHOF/3qr2kZKblUvK4Kco00Nk5SBx3PHwhaurAXmQlIHTV+N+HCGFDLSEsgg6k/mchmPe/0j2bSoNlDiS1ixOvPg0bJYpJGgggH+9U0glDIxezFDlhd7aEaN6aAp84rLqufVoLm4aL5VEMN+Lseg38YqpJktLlSnKTzFn1B1f7xjlZM4hshwlndwUHMrFS7ZlJtZiz77Quqq5AUyS7gg8CCQQeR2hriFamYWNyL7b6u3LlGdxGjCRmSLu/IBgdCHdz5RO7jBrdaAo9KQ7pADXdtlPmCRpbN5R5+zSySpN3f778YHSgp7Ky5IIy8DZiDuCmGCJKAOQNg+xBYEu9reEKdjqqR87FlrT7vKhMsWDJAJZtb8Q/fAxLxRIJ7ukXkWOnf9IzNjazDQpnqVROrUJBOYHl3P9xAdTi7oKmGugtr68zA1Rhy3sH7+MWSMJ7LG3S7+jGsNjAslUqUYoSUjQfoH05h/GHEuqUQANNT1hanBmPxeUHJqESiH7TMW2PIvaBl2n4BaiLC4ms+Xo9do6rxgzil0ol6BgGud9b2aAF4glJbXiHYizHz+UZ2Ne4ZFFSwchHj6R4VltdfXdA4mgAOWcb8XZvA+USnJcHtdCO5rcIvarVmfw49dIqRMQs2cfLS5tzeM+r3hUUg3Lkh9hfcw0pcvZSSSU2cWBZgLdBpD3RbRdq2uI4VFTWBK2cs177tY9H+UdTYiVEqJLP9379YtrqdBs+m+nd0BeAZMhCVf9Rug5H6wwBrm+qtz3Hkp0vtHMpId3HLv749mynDHf7wFLxMkslgkWbr68oN/aATbTrCC1zUKSVeGrGibbXgaYiZLI1S/ONMFa+tIqmSkq1ALenhrZz1CpZ2RNIdyxN4u98krzqZkjLl3L5iT4/OGc+lQkFks1ydx5wkdKVkkGwLPsrYw5pD7IUTlMp37KbiygGLXA7i3lCWdLmA3tmvbn00g+jryTmvc6QatBJf7wAcWHKtH0+GrWnMMqU/zKUALecDKDKIcFt7Mecex0YYZHOc6+hROoYTGTibXUnna12Z4qqaxStOyn5tx4x0dGx2okc3aSpuKGb1xi2TPUl8p1ttccI6OhQJGQqTelqVqB7IB2JsTYDTQ2gGfTzNSM1yHHLXmzR0dHVdAJGDcSnbbGUIFdW8rwZT1cyyUl9QAeceR0cyIncADSSOUZiJWpJ7SQWfKA1zfc8G9CM1ULY5FKNyLp3SQXtsXa8dHRv1EQ3X6I5AqZCAj4jcghtwoFiCN/1HWLpkoG2tx1I04NHR0YndClq2TQIYZrni5DcIKMrdy0dHQguJ5UXJl9IskT5aFAzUungNeXS8dHRW3dgqiaFq2sq5cw/hy/dp01cnT1rFOaPI6Ba0NFBCxxc0E9VIl727+EQmSgS5AO0dHRfCJJMTkMS2j6b/ANoCkBZUSLtcvYWue/lHR0b2HwWqTeZKzrzCY4e4ZhcC/jEyv4Q50u77tYd7x5HQgj7K0uqpCknMGSOXDnHlAS7X2L+JH08o6OhodbMqJylD7a7eUKK2iU5YEjaOjoQyQtKioo5CszZbFze2gJeHSZ6HAclt9ODWjo6Gv8ZyooVlWhBYm+/gOHCKk1fvCAgnkO5z0uI8joIRAM3K1fLmqUAC+u+7gHfkB4wDU4bmLhukdHQoOLThRQkUKk6kNw/XaGKKgJsVEb+Ijo6CvecqL//Z'
                },
                {
                    quest: "Vai em busca de minérios sem se preocupar com as criaturas da noite",
                    resp: "pro",
                    marcado: false,
                    img: 'https://sm.ign.com/ign_br/screenshot/default/minecraft-encontrar-diamantes-3_a69f.jpg'
                },
                {
                    quest: "Cava um buraco e se esconde até o amanhecer",
                    resp: "noob",
                    marcado: false,
                    img: 'https://i.ytimg.com/vi/JH26zmSTljU/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDqUrdQFLPH-ps1JVfLDT5dlRkxpQ'
                }
            ]
        },
        {
            id: "quest1",
            tipo: "2",
            limite:2,
            enun: "Qual o minério mais útil?",
            alt: [
                {
                    quest: "Ferro",
                    resp: "pro",
                    marcado: false,
                    img:'https://tm.ibxk.com.br/2022/06/02/02163534129343.jpg'
                },
                {
                    quest: "Ouro",
                    resp: "pro",
                    marcado: false,
                    img:'https://s2-techtudo.glbimg.com/tC7UbGcQZTaQzR0JvlALLZRgeps=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/7/d/RyEPBeQhKFnmsIXwDujA/2015-10-05-minecraft-como-achar-encontrar-ouro.jpg'
                },
                {
                    quest: "Diamante",
                    resp: "noob",
                    marcado: false,
                    img:'https://files.tecnoblog.net/wp-content/uploads/2020/05/diamantes-minecraft-01.png'
                },
                {
                    quest:"redstone",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://pesadosgamers.com.br/wp-content/uploads/2023/10/Redstone.jpg'
                }
            ]
        },
        {
            id: "quest2",
            tipo: "1",
            limite:1,
            enun: "Você achou seus primeiros 5 diamantes. O que você fará com eles?",
            alt: [
                {
                    quest: "Elmo",
                    resp: "noob",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUi9WEtKHhNp_ffGkxGpQy4drk8rkrJv2SMw&s'
                },
                {
                    quest: "Picareta e Mesa de Encantamentos",
                    resp: "pro",
                    marcado: false,
                    img:'https://s2-techtudo.glbimg.com/SbjoIRrMheHaVV4MNi2P1erNhXg=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/2/z/MDtAZPThaomgyRch98eA/minecraft-como-fazer-mesa-encantamentos-tutorial.jpg'
                },
                {
                    quest: "toca disco",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://www.minecrafteo.com/wp-content/uploads/2016/06/tocadiscos-minecraft-363x212.jpg'
                },
                {
                    quest:"Armadura completa",
                    resp: "noob",
                    marcado: false,
                    img:'https://www.minecrafteo.com/wp-content/uploads/2017/08/diamond-armor-skin.jpg'
                }
            ]
        },
        {
            id: "quest3",
            tipo: "2",
            limite:2,
            enun: "Melhor farm de xp?",
            alt: [
                {
                    quest: "Endarman",
                    resp: "pro",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/5RV5ONJhwH8/maxresdefault.jpg'
                },
                {
                    quest: "Farm de mob spawner",
                    resp: "noob",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICF2fwiVAKgEwG8L0c9NUsG1FXtLPOGN1VA&s'
                },
                {
                    quest: "Mobtrap clássica ",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/1Sy_Gm7CarA/maxresdefault.jpg'
                },
                {
                    quest:"Farm de porco",
                    resp: "noob",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/nRr9GYKan54/maxresdefault.jpg'
                }
            ]
        },
        {
            id: "quest4",
            tipo: "2",
            limite:4,
            enun: "Melhor comida do jogo?",
            alt: [
                {
                    quest: "Carne podre",
                    resp: "noob",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/SftNqkKS-VQ/maxresdefault.jpg'
                },
                {
                    quest: "Galinha assada",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://w7.pngwing.com/pngs/307/915/png-transparent-minecraft-chicken-meat-cauldron-item-minecraft-chicken-cooking-video-game.png'
                },
                {
                    quest: "bife",
                    resp: "pro",
                    marcado: false,
                    img:'https://i0.wp.com/pt.moyens.net/wp-content/uploads/2021/09/1631995989_Como-fazer-um-bife-no-Minecraft.jpg'
                },
                {
                    quest:"Bacon",
                    resp: "pro",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/XBKh-RxMVlc/sddefault.jpg'
                },
                {
                    quest:"Cenoura",
                    resp:"noob",
                    marcado: false,
                    img:'https://s2-techtudo.glbimg.com/4i1zDtfJIcZUfTc8quRLshSEr7k=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/F/b/lZvOZATmCQKJx9LHJuUA/minecraft-como-conseguir-cenoura-navio-plantar.jpg'
                },
                {
                    quest:"Cenoura dourada",
                    resp:"pro",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/cWy-uvfGt9A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAj_7jF60C6Irro7jn5a1sqT19GNw'
                },
                {
                    quest:"Torta de albobora",
                    resp:"intermediario",
                    marcado: false,
                    img:'https://2.bp.blogspot.com/-jtUIUBSOrIs/UIwIRpExw4I/AAAAAAAAAGg/pByJMbAmRlU/s1600/Torta+de+Abobro.png'
                },
                {
                    quest: "beterraba",
                    resp: "noob",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbE_gI2Z3XYAtDjOfb3mN54CUBXZ-7xzUy3gjBunU5ze8ej5vmgeJAVwYnpd0htJCbAs&usqp=CAU'
                }
            ]
        },
        {
            id: "quest5",
            tipo: "2",
            limite:2,
            enun: "Farms essenciais para o começo da gameplay",
            alt: [
                {
                    quest: "Farm de Pedra",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/zd9H4pzIDBg/maxresdefault.jpg'
                },
                {
                    quest: "Farm de pólvora",
                    resp: "noob",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/k9Z65NLMSjA/maxresdefault.jpg'
                },
                {
                    quest: "Farm de Areia",
                    resp: "noob",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/BWwzHC5sfBM/maxresdefault.jpg'
                },
                {
                    quest:"Farm de Madeira",
                    resp: "pro",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa23Zhe_udufUx_AwLmfwFI1T9gk2rTcLmuQ&s'
                },
                {
                    quest:"Farm de xp",
                    resp:"pro",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJPaUocxui4IGAlbG-YrmBsTRhqkrcUR6Og&s'
                },
                {
                    quest: "Farm de Comida",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWm7hlFmHe4yEdN_eR194ttVmnY8r3xSnXA&s'
                }
                
            ]
        },
        {
            id: "quest6",
            tipo: "2",
            limite:3,
            enun: "Quais os intens mais últeis?",
            alt: [
                {
                    quest: "Maçã dourada",
                    resp: "pro",
                    marcado: false,
                    img:'https://criticalhits.com.br/wp-content/uploads/2021/09/Screenshot_2-4-910x523.png'
                },
                {
                    quest: "Totem da imortalidade",
                    resp: "pro",
                    marcado: false,
                    img:'https://criticalhits.com.br/wp-content/uploads/2023/04/minecraft-totem-da-imortalidade.jpg'
                },
                {
                    quest: "Balde de Leite",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnSpJgnRkC1LayNrdWJvl07z2CAc4VKHw9Q&s'
                },
                {
                    quest:"Poção de dano",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21udyf4J7fhw0xv26YubDYM9EM3GqQWBGJw&s'
                },
                {
                    quest:"Couro",
                    resp:"noob",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBJIk1pE348zSwRt0rkTtcakSpJA1PrGkIQ&s'
                },
            ]
                
        },
        {
            id: "quest7",
            tipo: "1",
            limite:1,
            enun: "O que dá mais medo?",
            alt: [
                {
                    quest: "Herobrine",
                    resp: "noob",
                    marcado: false,
                    img:'https://www.esports.net/br/wp-content/uploads/sites/3/2024/04/como-invocar-herobrine-no-minecraft-2024.webp'
                },
                {
                    quest: "Warden",
                    resp: "noob",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YmLLhSG_a4DQF_ZGl7t3Tdves06rO-EZ7A&s'
                },
                {
                    quest: "Endermen",
                    resp: "noob",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/CfYIWy6BPcg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHDkwHpRSn1rWh5bfRd4ysVkWNSQ'
                },
                {
                    quest:"Bebê zumbi com armadura e espada",
                    resp: "pro",
                    marcado: false,
                    img:'https://preview.redd.it/mdjosivzexha1.jpg?auto=webp&s=89dc6e64def6764436cecc8e37f0f68cbab22ac8'
                },
                {
                    quest:"fantasmas",
                    resp:"noob",
                    marcado: false,
                    img:'https://pm1.aminoapps.com/7323/2430d315b2986c3fa2fe15370dc439e8d64d709cr1-748-421v2_uhq.jpg'
                }
            ]
        },
        
        {
            id: "quest8",
            tipo: "2",
            limite:2,
            enun: "Quais mobs mais últeis?",
            alt: [
                {
                    quest: "Galinha",
                    resp: "noob",
                    marcado: false,
                    img:'https://criticalhits.com.br/wp-content/uploads/2021/07/minecraft-como-fazer-ovo-de-galinha.jpg'
                },
                {
                    quest: "piglin",
                    resp: "pro",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSCQR-GEtFUsEBGYWJaN7qZseKzAYPLB9-w&s'
                },
                {
                    quest: "Endermen",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/10/minecraft-endermen-feature.jpg'
                },
                {
                    quest:"Aldeão",
                    resp: "pro",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9Y9E7E87u3QEE2KG49X6gWhDgpLkH2_B-paGjZofZqGmzcBkPJoVs1jTvrj8TVLX5Z8&usqp=CAU'
                },
            ]
        },
        {
            id: "quest9",
            tipo: "1",
            limite:1,
            enun: "Qual a melhor parte do jogo?",
            alt: [
                {
                    quest: "Sistema de economia",
                    resp: "pro",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/nRIOlSDskTI/maxresdefault.jpg'
                },
                {
                    quest: "Sequestro de aldeão",
                    resp: "pro",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeSn2cihrOKQgaZkmXPJ-DLxeElpBoFX5SA&s'
                },
                {
                    quest: "Matar o dragão",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://static1-br.millenium.gg/articles/1/98/01/@/119713-endminecraft-orig-2-article_m-1.jpg'
                },
                {
                    quest:"Lutar no nether",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://files.tecnoblog.net/wp-content/uploads/2022/10/minecraft-nether-update-05-edited.png'

                }  
            ]
        },
        {
            
        
        id: "quest10",
            tipo: "1",
            limite:1,
            enun: "Quem é melhor?",
            alt: [
                {
                    quest: "Mozzart",
                    resp: "noob",
                    marcado: false,
                    img:'https://aventurasnahistoria.com.br/media/uploads/legacy/2018/12/03/mozarthistoriacapa.jpeg'
                },
                {
                    quest: "Chopin",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMjIaMDNky7zD7upzDKWTotYjyw9ZBzswYw&s'
                },
                {
                    quest: "Mundo Bita",
                    resp: "noob",
                    marcado: false,
                    img:'https://i.ytimg.com/vi/cjONzZPJONc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZCt7ol-PdJba3jwu413kC2bNyuQ'
                },
                {
                    quest:"C418",
                    resp: "pro",
                    marcado: false,
                    img:'https://i.scdn.co/image/ab6761610000e5eba9b8234e3071836212561d19'
                }  
            ]
        },
        {
            id: "quest11",
            tipo: "1",
            limite:1,
            enun: "Quantos minerios faz uma armadura completa?",
            alt: [
                {
                    quest: "20",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-gold-number-with-the-number-20-on-it-image_2607992.jpg'
                },
                {
                    quest: "32",
                    resp: "noob",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4h5pxXV9HRDN9MGEKUr7b3yzdwHQDpm9wQ&s'
                },
                {
                    quest: "24",
                    resp: "pro",
                    marcado: false,
                    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/24-Logo.svg/1200px-24-Logo.svg.png'
                },
                {
                    quest:"38",
                    resp: "noob",
                    marcado: false,
                    img:'https://cdn.awsli.com.br/300x300/356/356904/produto/23378876/2bc60a9f79.jpg'
                }  
            ]
        },
        {
            id: "quest12",
            tipo: "1",
            limite:1,
            enun: "Qual bloco mais resistente coletável?",
            alt: [
                {
                    quest: "Bloco de diamante",
                    resp: "noob",
                    marcado: false,
                    img:'https://static1-br.millenium.gg/articles/3/10/75/3/@/127897-bloc2-orig-1-article_m-1.jpg'
                },
                {
                    quest: "Obisidiana",
                    resp: "pro",
                    marcado: false,
                    img:'https://tm.ibxk.com.br/2022/05/19/19212510604647.jpg?ims=1200x675'
                },
                {
                    quest: "Tijolos de pedra",
                    resp: "noob",
                    marcado: false,
                    img:'https://criticalhits.com.br/wp-content/uploads/2021/11/Screenshot_3-910x523.png'
                },
                {
                    quest:"Bloco de quartzo",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yu_QsGzqbWs6wI6GLGHmYbydvvZr8x02Ag&s'
                }  
            ]    
        },
        {
            id: "quest13",
            tipo: "1",
            limite:1,
            enun: "Você usa o comando de Manter Iventário?",
            alt: [
                {
                    quest: "Sim",
                    resp: "noob",
                    marcado: false,
                    img:'https://cdn.pixabay.com/photo/2020/02/09/09/39/smiley-4832495_1280.png'
                },
                {
                    quest: "Não",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPTuGTNN-UiGoBbK2IJpF4XSInfNKJsc7Kw&s'
                },
                {
                    quest: "Nunca",
                    resp: "pro",
                    marcado: false,
                    img:'https://i.pinimg.com/originals/4d/c5/97/4dc597de4e2530cc52b07e9e44ab889e.png'
                },
                
            ]    
        },
        {
            id: "quest14",
            tipo: "1",
            limite:1,
            enun: "Qual o nome do Zumbi do deserto?",
            alt: [
                {
                    quest: "Múmia",
                    resp: "intermediario",
                    marcado: false,
                    img:'https://steamuserimages-a.akamaihd.net/ugc/768353651069129085/773A5419B243F8B6D8E5892BDDA54E9547C6E604/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
                },
                {
                    quest: "Criatura",
                    resp: "pro",
                    marcado: false,
                    img:'https://steamuserimages-a.akamaihd.net/ugc/768353651069129085/773A5419B243F8B6D8E5892BDDA54E9547C6E604/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
                },
                {
                    quest: "Enormossauro",
                    resp: "noob",
                    marcado: false,
                    img:'https://steamuserimages-a.akamaihd.net/ugc/768353651069129085/773A5419B243F8B6D8E5892BDDA54E9547C6E604/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
                },
                
            ]    
        },
        {
            id: "quest15",
            tipo: "1",
            limite:1,
            enun: "Qual o nome do esqueleto da neve?",
            alt: [
                {
                    quest: "Esqueleto errante",
                    resp: "pro",
                    marcado: false,
                    img:'https://steamuserimages-a.akamaihd.net/ugc/768353651069129085/773A5419B243F8B6D8E5892BDDA54E9547C6E604/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
                },
                {
                    quest: "Elza",
                    resp: "noob",
                    marcado: false,
                    img:'https://steamuserimages-a.akamaihd.net/ugc/768353651069129085/773A5419B243F8B6D8E5892BDDA54E9547C6E604/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
                },
                {
                    quest: "Friagem",
                    resp: "noob",
                    marcado: false,
                    img:'https://steamuserimages-a.akamaihd.net/ugc/768353651069129085/773A5419B243F8B6D8E5892BDDA54E9547C6E604/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
                }
            ]
        }
            
    ]
}
 

export default quiz;