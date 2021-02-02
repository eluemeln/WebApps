#include<iostream>
#include <list>
#include <stack>// stck library for stack elements
using namespace std;

// Class  representing a graph
class Graph
{
	int U;      // Number of vertices

				// Pointer to an array containing adjacency List
	list<int> *adj;

	// A function used by topologicalSort
	void topologicalSortUtil(int a, bool visited[], stack<int> &Stack);
public:
	Graph(int U); // Constructor

				  // function to add an edge to graph
	void addEdge(int a, int b);

	// prints a Topological Sort of the complete graph
	void topologicalSort();
};

Graph::Graph(int U)
{
	this->U = U;
	adj = new list<int>[U];
}

void Graph::addEdge(int a, int b)
{
	adj[a].push_back(b); // Add w to v’s list.
}


void Graph::topologicalSortUtil(int a, bool visited[],// A recursive function used by topologicalSort
	stack<int> &Stack)
{
	
	visited[a] = true;// Mark the current node as visited


	list<int>::iterator i;
	for (i = adj[a].begin(); i != adj[a].end(); ++i)
		if (!visited[*i])
			topologicalSortUtil(*i, visited, Stack);

	
	Stack.push(a);// Push current vertex to stack which stores result
}


void Graph::topologicalSort()
{
	stack<int> Stack;

	// Mark all the vertices as not visited
	bool *visited = new bool[U];
	for (int i = 0; i < U; i++)
		visited[i] = false;


	// Sort beginning from all vertices one by one
	for (int i = 0; i < U; i++)
		if (visited[i] == false)
			topologicalSortUtil(i, visited, Stack);

	// display contents of stack
	while (Stack.empty() == false)
	{
		cout << Stack.top() << " ";
		Stack.pop();
	}
}


int main()
{
	
	Graph g(6);
	g.addEdge(4, 1);
	g.addEdge(3, 0);
	g.addEdge(3, 0);
	g.addEdge(3, 1);
	g.addEdge(2, 1);
	g.addEdge(5, 6);

	cout << "Following is a Topological Sort of the given graph \n";
	g.topologicalSort();

	return 0;
}
