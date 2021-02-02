#include<iostream>
using namespace std;
const int INF = 11111;//Initialize infinity to 11111
int  main()
{
	int i, j, k, n, s;
	int max[5][5];
	int cost[5][5];

	
	cout << "Enter the number of vertices in the graph:";
	cin >> n; // n :- No. of vertices
	cout << "Enter the adjecent matrix of the graph:\n";

	for (i = 0;i<n;i++) {             //Enter weight values to 'cost' matrix
		cout << "Enter non negative weights for the row " << i << ":";
		for (j = 0;j<n;j++) { cin >> cost[i][j]; }
	}

	for (i = 0;i<n;i++) {
		for (j = 0;j<n;j++) {
			if (cost[i][j] == 0) max[i][j] = INF;   // Set input 0 as Infinity values,that is 1111
			else max[i][j] = cost[i][j]; //if cost is not zero, as cost value to max matrix to print values
		}
	}
	cout << "Adjecent matrix of cost of edges:\n";
	for (i = 0;i<n;i++) {
		for (j = 0;j<n;j++)cout << max[i][j] << "\t";cout << "\n";

	} 
	//display  all the matrix before implementing Dijkstra's algorithm

	for (k = 0;k<n;k++) { //Implement Dijkstra's algorithm to find shortest path
		for (i = 0;i<n;i++) {
			for (j = 0;j<n;j++) {
				if (max[i][j]>max[i][k] + max[k][j]) max[i][j] = max[i][k] + max[k][j];
			}
		}
	}
	cout << "Adjecent matrix of lowest cost between the vertices:\n"; // display all matrix after doing the algorithm
	for (i = 0;i<n;i++) {
		for (j = 0;j<n;j++)cout << max[i][j] << "\t";cout << "\n";
	}

	cout << "Enter the initial  vertex:";
	cin >> s; //Initialize source
	max[s][s] = 0;
	for (j = 0;j<n;j++)cout << max[0][j] << "\n"; //dsplay the shortest path
	return 0;
	
}
